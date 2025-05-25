using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Nextflix.Migrations
{
    /// <inheritdoc />
    public partial class AddMissingColumnsToCommentsTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            // Adiciona as colunas faltantes à tabela Comments
            migrationBuilder.AddColumn<Guid>(
                name: "CommentId",
                table: "Comments",
                type: "uniqueidentifier",
                nullable: false,
                defaultValueSql: "NEWID()");

            migrationBuilder.AddColumn<DateTime>(
                name: "DateCreated",
                table: "Comments",
                type: "datetime2",
                nullable: false,
                defaultValueSql: "GETDATE()");

            migrationBuilder.AddColumn<Guid>(
                name: "MovieId",
                table: "Comments",
                type: "uniqueidentifier",
                nullable: false,
                defaultValueSql: "NEWID()");

            migrationBuilder.AddColumn<string>(
                name: "Text",
                table: "Comments",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "UserId",
                table: "Comments",
                type: "uniqueidentifier",
                nullable: false,
                defaultValueSql: "NEWID()");

            // Adiciona uma chave primária à tabela Comments
            migrationBuilder.AddPrimaryKey(
                name: "PK_Comments",
                table: "Comments",
                column: "CommentId");

            // Adiciona índices para as chaves estrangeiras
            migrationBuilder.CreateIndex(
                name: "IX_Comments_MovieId",
                table: "Comments",
                column: "MovieId");

            migrationBuilder.CreateIndex(
                name: "IX_Comments_UserId",
                table: "Comments",
                column: "UserId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            // Remove os índices
            migrationBuilder.DropIndex(
                name: "IX_Comments_MovieId",
                table: "Comments");

            migrationBuilder.DropIndex(
                name: "IX_Comments_UserId",
                table: "Comments");

            // Remove a chave primária
            migrationBuilder.DropPrimaryKey(
                name: "PK_Comments",
                table: "Comments");

            // Remove as colunas
            migrationBuilder.DropColumn(
                name: "CommentId",
                table: "Comments");

            migrationBuilder.DropColumn(
                name: "DateCreated",
                table: "Comments");

            migrationBuilder.DropColumn(
                name: "MovieId",
                table: "Comments");

            migrationBuilder.DropColumn(
                name: "Text",
                table: "Comments");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Comments");
        }
    }
}