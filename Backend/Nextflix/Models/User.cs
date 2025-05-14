using Nextflix.Models;
using System.Text.Json.Serialization;

namespace Nextflix.Models
{
  public class User
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
    public string Role { get; set; }
    public string Bio { get; set; }
    public string PhotoBase64 { get; set; }
    public List <User> Following { get; set; } = new List<User>();
    public List <User> Followers { get; set; } = new List<User>();
    public List <Film> Films { get; set; } = new List<Film>();
    //public List<List<Film>> FilmsLists { get; set; } = new();
    public List<CustomFilmList> FilmLists { get; set; } = new();
    //public List<Comment> Comments { get; set; } = new();
  }
}

public class CustomFilmList
{
  public int Id { get; set; }

  public string Name { get; set; } 

  public int UserId { get; set; }

  [JsonIgnore]
  public User User { get; set; }

  public List<Film> Films { get; set; } = new();
}