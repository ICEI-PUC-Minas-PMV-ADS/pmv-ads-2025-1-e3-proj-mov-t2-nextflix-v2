using System;
using Nextflix.Models;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace Nextflix.Models
{
    using NextFlix.Models;
    using System.Text.Json.Serialization;
    public class User
    {
        public Guid UserId { get; set; }
        
        [Required]
        public string Name { get; set; }
        public string Email { get; set; }
        [JsonIgnore]
        [Required]
        public string Password { get; set; }
        public string Role { get; set; }
        public string Bio { get; set; }
        public string PhotoBase64 { get; set; }
        public List<User> Following { get; set; } = new();
        public List<User> Followers { get; set; } = new();
        public List<Movie> Movies { get; set; } = new();
        public List<CustomFilmsList> FilmLists { get; set; } = new();
        public List<Comment> Comments { get; set; } = new();
    }
}