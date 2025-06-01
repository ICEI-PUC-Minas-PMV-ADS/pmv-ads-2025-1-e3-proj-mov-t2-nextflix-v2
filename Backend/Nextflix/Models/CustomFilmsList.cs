using System.Text.Json.Serialization;

namespace Nextflix.Models
{
    public class CustomFilmsList
    {
      public int Id { get; set; }

      public string Name { get; set; }

      public int UserId { get; set; }

      [JsonIgnore]
      public User User { get; set; }

      public List<Movie> Movies { get; set; } = new();
    }
}
