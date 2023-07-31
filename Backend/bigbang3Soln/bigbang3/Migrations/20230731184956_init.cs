using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace bigbang3.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    UserId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Role = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PasswordHash = table.Column<byte[]>(type: "varbinary(max)", nullable: true),
                    PasswordKey = table.Column<byte[]>(type: "varbinary(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.UserId);
                });

            migrationBuilder.CreateTable(
                name: "Agents",
                columns: table => new
                {
                    TravelId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DateOfBirth = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Gender = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Phone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AgencyID = table.Column<int>(type: "int", nullable: true),
                    AgencyName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IsApproved = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    GSTnumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UsersUserId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Agents", x => x.TravelId);
                    table.ForeignKey(
                        name: "FK_Agents_Users_UsersUserId",
                        column: x => x.UsersUserId,
                        principalTable: "Users",
                        principalColumn: "UserId");
                });

            migrationBuilder.CreateTable(
                name: "Travellers",
                columns: table => new
                {
                    TravellerId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DateOfBirth = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Gender = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Phone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UsersUserId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Travellers", x => x.TravellerId);
                    table.ForeignKey(
                        name: "FK_Travellers_Users_UsersUserId",
                        column: x => x.UsersUserId,
                        principalTable: "Users",
                        principalColumn: "UserId");
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "UserId", "Email", "PasswordHash", "PasswordKey", "Role" },
                values: new object[] { 1, "admin@gmail.com", new byte[] { 60, 214, 218, 121, 37, 39, 106, 200, 180, 137, 171, 202, 170, 153, 8, 2, 168, 148, 237, 168, 170, 167, 215, 50, 254, 254, 193, 144, 20, 109, 224, 25, 30, 29, 133, 147, 73, 87, 21, 127, 197, 215, 245, 205, 8, 82, 167, 140, 181, 91, 64, 212, 13, 19, 234, 112, 190, 82, 205, 113, 137, 132, 250, 229 }, new byte[] { 197, 85, 94, 35, 55, 151, 160, 17, 9, 242, 232, 254, 97, 37, 99, 101, 20, 96, 118, 12, 78, 213, 105, 102, 70, 127, 40, 92, 72, 193, 70, 153, 110, 40, 113, 8, 72, 123, 97, 248, 21, 31, 0, 150, 251, 139, 0, 173, 134, 83, 202, 226, 120, 129, 12, 95, 68, 190, 72, 87, 16, 226, 40, 113, 35, 224, 55, 35, 19, 114, 34, 251, 107, 84, 78, 153, 44, 2, 27, 149, 21, 47, 143, 180, 182, 139, 2, 149, 200, 180, 94, 23, 165, 98, 69, 214, 251, 243, 3, 57, 11, 47, 171, 141, 205, 225, 149, 129, 3, 19, 178, 174, 80, 189, 179, 82, 90, 74, 71, 220, 217, 181, 143, 24, 148, 216, 172, 229 }, "Admin" });

            migrationBuilder.CreateIndex(
                name: "IX_Agents_UsersUserId",
                table: "Agents",
                column: "UsersUserId");

            migrationBuilder.CreateIndex(
                name: "IX_Travellers_UsersUserId",
                table: "Travellers",
                column: "UsersUserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Agents");

            migrationBuilder.DropTable(
                name: "Travellers");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
