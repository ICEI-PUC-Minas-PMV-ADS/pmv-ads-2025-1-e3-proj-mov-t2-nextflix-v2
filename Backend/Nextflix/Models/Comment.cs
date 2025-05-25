using Nextflix.Models;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NextFlix.Models
{
    public class Comment
    {
        [Key]
        public Guid CommentId { get; set; }

        [ForeignKey("Movie")] // Importante para o Entity Framework
        public Guid MovieId { get; set; } // Chave estrangeira para o filme
        public Movie Movie { get; set; } // Propriedade de navegação para o filme

        public string Text { get; set; }

        public DateTime DateCreated { get; set; }

        [ForeignKey("User")]
        public Guid UserId { get; set; }
        public User User { get; set; }
            
    }
}