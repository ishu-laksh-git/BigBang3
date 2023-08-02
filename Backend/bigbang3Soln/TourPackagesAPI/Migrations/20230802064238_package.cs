using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TourPackagesAPI.Migrations
{
    public partial class package : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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
                    Price = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tourpackages", x => x.packageId);
                });

            migrationBuilder.CreateTable(
                name: "Galleries",
                columns: table => new
                {
                    PicId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    packageId = table.Column<int>(type: "int", nullable: false),
                    PicUrl = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    packagespackageId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Galleries", x => x.PicId);
                    table.ForeignKey(
                        name: "FK_Galleries_Tourpackages_packagespackageId",
                        column: x => x.packagespackageId,
                        principalTable: "Tourpackages",
                        principalColumn: "packageId");
                });

            migrationBuilder.CreateTable(
                name: "Itenaries",
                columns: table => new
                {
                    itenaryItemId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    packageId = table.Column<int>(type: "int", nullable: false),
                    day = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    activity = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    packagespackageId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Itenaries", x => x.itenaryItemId);
                    table.ForeignKey(
                        name: "FK_Itenaries_Tourpackages_packagespackageId",
                        column: x => x.packagespackageId,
                        principalTable: "Tourpackages",
                        principalColumn: "packageId");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Galleries_packagespackageId",
                table: "Galleries",
                column: "packagespackageId");

            migrationBuilder.CreateIndex(
                name: "IX_Itenaries_packagespackageId",
                table: "Itenaries",
                column: "packagespackageId");
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
