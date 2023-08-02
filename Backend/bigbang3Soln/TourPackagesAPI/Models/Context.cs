using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace TourPackagesAPI.Models
{
    public class Context : DbContext
    {
        public Context(DbContextOptions options) : base(options)
        {

        }
        public DbSet<packages> Tourpackages { get; set; }
        public DbSet<itenary> Itenaries { get; set; }
        public DbSet<gallery> Galleries { get; set; }
    }
}

