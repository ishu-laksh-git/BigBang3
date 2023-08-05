using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TourPackagesAPI.Migrations
{
    public partial class packages : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Galleries",
                columns: table => new
                {
                    PicId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    packageId = table.Column<int>(type: "int", nullable: false),
                    PicUrl = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Galleries", x => x.PicId);
                });

            migrationBuilder.CreateTable(
                name: "Tourpackages",
                columns: table => new
                {
                    packageId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AgencyId = table.Column<int>(type: "int", nullable: true),
                    destination = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DepartureCity = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FromDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    ToDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    No_Days = table.Column<int>(type: "int", nullable: true),
                    No_Nights = table.Column<int>(type: "int", nullable: true),
                    FoodIncluded = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AccommodationIncluded = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TourType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    available = table.Column<int>(type: "int", nullable: true),
                    Price = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tourpackages", x => x.packageId);
                });

            migrationBuilder.CreateTable(
                name: "Itenaries",
                columns: table => new
                {
                    itenaryItemId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    packageId = table.Column<int>(type: "int", nullable: false),
                    packageId1 = table.Column<int>(type: "int", nullable: true),
                    day = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    activity = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Itenaries", x => x.itenaryItemId);
                    table.ForeignKey(
                        name: "FK_Itenaries_Tourpackages_packageId1",
                        column: x => x.packageId1,
                        principalTable: "Tourpackages",
                        principalColumn: "packageId");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Itenaries_packageId1",
                table: "Itenaries",
                column: "packageId1");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Galleries");

            migrationBuilder.DropTable(
                name: "Itenaries");

            migrationBuilder.DropTable(
                name: "Tourpackages");
        }
    }
}
