using System; // Importa o namespace System para usar tipos como DateTime e Guid
using System.ComponentModel.DataAnnotations; // Importa o namespace para usar atributos de validação
using System.Collections.Generic;
using NextFlix.Models; // Importa o namespace para usar coleções genéricas

namespace Nextflix.Models
{
    public class Movie
    {
        [Key] // Define que a propriedade Id é a chave primária da tabela
        public Guid MovieId { get; set; } // Propriedade para armazenar o identificador único do filme

        public string Name { get; set; } // Propriedade para armazenar o nome do filme

        public string Genre { get; set; } // Propriedade para armazenar o gênero do filme

        public string Synopsis { get; set; } // Propriedade para armazenar a sinopse do filme

        public string Duration { get; set; } // Propriedade para armazenar a duração do filme

        public string Classification { get; set; } // Propriedade para armazenar a classificação indicativa do filme

        public string Cast { get; set; } // Propriedade para armazenar o elenco do filme

        public DateTime ReleaseDate { get; set; } // Propriedade para armazenar a data de lançamento do filme

        public List<Comment> Comments { get; set; }

    }
}
