using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Nextflix.Models
{
    public class Comment
    {
        [Key]
        public Guid CommentId { get; set; }

        [ForeignKey(nameof(Movie))]
        public Guid? MovieId { get; set; }
        public Movie? Movie { get; set; }

        [ForeignKey(nameof(User))]
        public Guid? UserId { get; set; }
        public User? User { get; set; }

        [Required]
        public string Text { get; set; } = string.Empty;

        public DateTime DateCreated { get; set; }
    }
}