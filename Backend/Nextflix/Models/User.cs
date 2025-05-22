using Nextflix.Models;

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
        public List<CustomFilmsList> FilmLists { get; set; } = new();
    ////
    }
}