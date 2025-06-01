using System.ComponentModel.DataAnnotations;
using Nextflix.Models;
using System.Text.Json.Serialization;
using Microsoft.EntityFrameworkCore;

namespace Nextflix.Models
{
  public class User
  {
    [Key]
    public Guid UserId { get; set; }
    public string? Name { get; set; }
    public string? Email { get; set; }
    public string? Password { get; set; }
    public string? Role { get; set; }
    public string? Bio { get; set; }
    [JsonIgnore]
    public string? PhotoBase64 { get; set; }
    [JsonIgnore]
    public List<User>? Following { get; set; } = new();
    [JsonIgnore]
    public List<User>? Followers { get; set; } = new();
    [JsonIgnore]
    public List<Movie>? Movies { get; set; } = new();
    [JsonIgnore]
    public ICollection<Comment> Comentarios { get; set; } = new List<Comment>();

    }
}