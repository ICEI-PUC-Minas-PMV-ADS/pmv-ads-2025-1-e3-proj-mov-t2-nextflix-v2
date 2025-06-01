using Microsoft.EntityFrameworkCore;
using Nextflix.Models;

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

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Comment>(entity =>
            {
                modelBuilder.Entity<Comment>(entity =>
                {
                    entity.HasKey(c => c.CommentId);

                    entity.HasOne(c => c.User)
                        .WithMany(u => u.Comentarios) // Um usuário pode ter vários comentários
                        .HasForeignKey(c => c.UserId);

                    entity.HasOne(c => c.Movie)
                        .WithMany(m => m.Comentarios) // Um filme pode ter vários comentários
                        .HasForeignKey(c => c.MovieId);

                    entity.Property(c => c.Text)
                          .IsRequired()
                          .HasMaxLength(1000);

                    entity.Property(c => c.DateCreated)
                          .IsRequired();
                });

                modelBuilder.Entity<User>(entity =>
                {
                    entity.HasKey(u => u.UserId);
                });

                modelBuilder.Entity<Movie>().ToTable("Movies");
                modelBuilder.Entity<Movie>(entity =>
                {
                    entity.HasKey(m => m.MovieId);
                });

                base.OnModelCreating(modelBuilder);


            });
        }
    }
}