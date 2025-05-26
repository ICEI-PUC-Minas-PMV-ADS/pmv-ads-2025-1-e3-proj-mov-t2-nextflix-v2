using System.ComponentModel.DataAnnotations;
using NextFlix.Models;
using System.Text.Json.Serialization;

namespace Nextflix.Models
{
  public class User
  {
    public Guid UserId { get; set; }
    [Required]
    public string Name { get; set; }
    [JsonIgnore]
    public string Email { get; set; }
    public string Password { get; set; }
    [JsonIgnore]
    public string Role { get; set; }
    [JsonIgnore]
    public string Bio { get; set; }
    [JsonIgnore]
    public string PhotoBase64 { get; set; }
    [JsonIgnore]
    public List<User> Following { get; set; } = new();
    [JsonIgnore]
    public List<User> Followers { get; set; } = new();
    [JsonIgnore]
    public List<Movie> Movies { get; set; } = new();
    [JsonIgnore]
    public List<CustomFilmsList> FilmLists { get; set; } = new();
    [JsonIgnore]
    public List<Comment> Comments { get; set; } = new();
  }
}