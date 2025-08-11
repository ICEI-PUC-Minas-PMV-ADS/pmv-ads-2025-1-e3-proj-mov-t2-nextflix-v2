using System.ComponentModel.DataAnnotations;

namespace Nextflix.Models
{
    public class Movie
    {
        public Guid MovieId { get; set; }

        [Required]
        [MaxLength(200)]
        public string Nome { get; set; } = string.Empty; // Inicializa com string vazia

        [Required]
        [MaxLength(2000)]
        public string Sinopse { get; set; } = string.Empty; // Inicializa com string vazia

        public string? Capa { get; set; }

        public ICollection<Comment> Comentarios { get; set; } = new List<Comment>();
    }
}