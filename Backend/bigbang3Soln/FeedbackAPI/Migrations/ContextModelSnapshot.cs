﻿// <auto-generated />
using System;
using FeedbackAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace FeedbackAPI.Migrations
{
    [DbContext(typeof(Context))]
    partial class ContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.16")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("FeedbackAPI.Models.feedback", b =>
                {
                    b.Property<int>("feedbackID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("feedbackID"), 1L, 1);

                    b.Property<int?>("AgencyId")
                        .HasColumnType("int");

                    b.Property<string>("Comment")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("FeedbackDate")
                        .HasColumnType("datetime2");

                    b.Property<int?>("Ratings")
                        .HasColumnType("int");

                    b.Property<int?>("TourPackageId")
                        .HasColumnType("int");

                    b.Property<int?>("travellerID")
                        .HasColumnType("int");

                    b.HasKey("feedbackID");

                    b.ToTable("Feedbacks");
                });
#pragma warning restore 612, 618
        }
    }
}