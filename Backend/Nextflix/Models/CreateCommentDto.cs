using System;
using System.ComponentModel.DataAnnotations;

namespace Nextflix.Models.Dtos
{
    public class CreateCommentDto
    {
        [Required(ErrorMessage = "MovieId é obrigatório")]
        public Guid MovieId { get; set; }

        [Required(ErrorMessage = "UserId é obrigatório")]
        public Guid? UserId { get; set; }

        [Required(ErrorMessage = "O texto do comentário é obrigatório")]
        [StringLength(1000, MinimumLength = 1, ErrorMessage = "O texto deve ter entre 1 e 1000 caracteres")]
        public string Text { get; set; }
    }
}