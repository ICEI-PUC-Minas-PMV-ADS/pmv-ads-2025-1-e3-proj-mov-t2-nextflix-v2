using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Nextflix.Migrations
{
    /// <inheritdoc />
    public partial class M05AnulandoOsEfeitosDaMigracao04 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Rating",
                table: "Movies");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Rating",
                table: "Movies",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
