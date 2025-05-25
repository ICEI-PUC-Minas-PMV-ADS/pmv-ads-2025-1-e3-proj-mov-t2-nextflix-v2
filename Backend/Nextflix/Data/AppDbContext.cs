using Microsoft.EntityFrameworkCore;
using Nextflix.Models;
using NextFlix.Models;
using System.Collections.Generic;

namespace Nextflix.Data
{
  public class AppDbContext : DbContext
  {
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }
    public DbSet<User> Users { get; set; }
    public DbSet<Movie> Movies { get; set; }
    public DbSet<Comment> Comments { get; set; }
    public DbSet<CustomFilmsList> CustomFilmList { get; set; }
    protected override void OnModelCreating(ModelBuilder modelBuilder) // Método para configurar o modelo do banco de dados
        {
            modelBuilder.Entity<Comment>() // Configura a entidade Comment
                .HasOne(c => c.User) // Define que um Comment tem um User
                .WithMany(u => u.Comments) // Define que um User tem muitos Comments
                .HasForeignKey(c => c.UserId); // Define que a chave estrangeira é UserId

            modelBuilder.Entity<Comment>() // Configura a entidade Comment
                .HasOne(c => c.Movie) // Define que um Comment tem um Movie
                .WithMany(m => m.Comments) // Define que um Movie tem muitos Comments
                .HasForeignKey(c => c.MovieId); // Define que a chave estrangeira é MovieId
        }

    }
}
