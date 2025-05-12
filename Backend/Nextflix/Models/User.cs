using Microsoft.EntityFrameworkCore;
using Nextflix.Data;
using Nextflix.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader());
});

var app = builder.Build();
app.UseCors("AllowAll");
app.MapGet("/api/users", async (AppDbContext db) =>
    await db.users
            .Include(u => u.FilmLists)
                .ThenInclude(l => l.Films)
            .ToListAsync());

app.MapGet("/api/users/{id}", async (int id, AppDbContext db) =>
    await db.users
            .Include(u => u.FilmLists)
                .ThenInclude(l => l.Films)
            .FirstOrDefaultAsync(u => u.Id == id)
        is User user
        ? Results.Ok(user)
        : Results.NotFound());

// CRUD for CustomFilmList
app.MapGet("/api/lists", async (AppDbContext db) =>
    await db.CustomFilmLists
            .Include(l => l.Films)
            .Include(l => l.User)
            .ToListAsync());

app.MapGet("/api/lists/{id}", async (int id, AppDbContext db) =>
    await db.CustomFilmLists
            .Include(l => l.Films)
            .Include(l => l.User)
            .FirstOrDefaultAsync(l => l.Id == id)
        is CustomFilmList list
        ? Results.Ok(list)
        : Results.NotFound());

app.MapPost("/api/lists", async (CustomFilmList list, AppDbContext db) =>
{
    db.CustomFilmLists.Add(list);
    await db.SaveChangesAsync();
    return Results.Created($"/api/lists/{list.Id}", list);
});

app.MapPut("/api/lists/{id}", async (int id, CustomFilmList updated, AppDbContext db) =>
{
    var list = await db.CustomFilmLists.FindAsync(id);
    if (list is null) return Results.NotFound();
    list.Name = updated.Name;
    list.Films = updated.Films;
    await db.SaveChangesAsync();
    return Results.NoContent();
});

app.MapDelete("/api/lists/{id}", async (int id, AppDbContext db) =>
{
    var list = await db.CustomFilmLists.FindAsync(id);
    if (list is null) return Results.NotFound();
    db.CustomFilmLists.Remove(list);
    await db.SaveChangesAsync();
    return Results.NoContent();
});

app.Run();

namespace Nextflix.Data
{
    using Microsoft.EntityFrameworkCore;
    using Nextflix.Models;

    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }
        public DbSet<User> Users { get; set; }
        public DbSet<CustomFilmList> CustomFilmLists { get; set; }
        public DbSet<Film> Films { get; set; }
    }
}

namespace Nextflix.Models
{
    using System.Text.Json.Serialization;
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        [JsonIgnore]
        public string Password { get; set; }
        public string Role { get; set; }
        public string Bio { get; set; }
        public string PhotoBase64 { get; set; }
        public List<User> Following { get; set; } = new();
        public List<User> Followers { get; set; } = new();
        public List<Film> Films { get; set; } = new();
        public List<CustomFilmList> FilmLists { get; set; } = new();
    }
}

namespace Nextflix.Models
{
    public class Film
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string PosterPath { get; set; }
        public List<User> Users { get; set; } = new();
        public List<CustomFilmList> CustomLists { get; set; } = new();
    }
}

namespace Nextflix.Models
{
    using System.Text.Json.Serialization;
    public class CustomFilmList
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int UserId { get; set; }
        [JsonIgnore]
        public User User { get; set; }
        public List<Film> Films { get; set; } = new();
    }
}
