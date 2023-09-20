using ImagesAPI.Interfaces;
using ImagesAPI.Models;
using ImagesAPI.Services;
using Microsoft.EntityFrameworkCore;

namespace ImagesAPI
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            builder.Services.AddDbContext<Context>(opts =>
            {
                opts.UseSqlServer(builder.Configuration.GetConnectionString("MyConn"));
            });

            builder.Services.AddScoped<IRepo<int, Images>, TourImageRepo>();
            builder.Services.AddScoped<ITourImageService, TourImageService>();
            builder.Services.AddCors(opts =>
            {
                opts.AddPolicy("AngularCORS", options =>
                {
                    options.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin();
                });
            });

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseAuthentication();
            app.UseCors("AngularCORS");

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}