using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Nextflix.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            // Adiciona as colunas que podem estar faltando na tabela Comments
            migrationBuilder.Sql(@"

                IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id = OBJECT_ID('Comments') AND name = 'MovieId')
                BEGIN
                    ALTER TABLE Comments ADD MovieId UNIQUEIDENTIFIER NOT NULL DEFAULT NEWID();
                END

                IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id = OBJECT_ID('Comments') AND name = 'Text')
                BEGIN
                    ALTER TABLE Comments ADD Text NVARCHAR(MAX) NULL;
                END

                IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id = OBJECT_ID('Comments') AND name = 'DateCreated')
                BEGIN
                    ALTER TABLE Comments ADD DateCreated DATETIME2 NOT NULL DEFAULT GETDATE();
                END

                IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id = OBJECT_ID('Comments') AND name = 'UserId')
                BEGIN
                    ALTER TABLE Comments ADD UserId UNIQUEIDENTIFIER NOT NULL DEFAULT NEWID();
                END
            ");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            // Não faz nada para não remover tabelas existentes
        }
    }
}