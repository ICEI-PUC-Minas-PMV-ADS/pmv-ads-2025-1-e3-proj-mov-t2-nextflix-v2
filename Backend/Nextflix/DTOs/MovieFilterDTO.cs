using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using NextFlix.Models;

namespace Nextflix.DTOs
{
    public class MovieFilterDTO //DataTransferObject
    {
        public string Genero { get; set; }
        public string Avaliacao { get; set; }
        public DateTime? DataInicio { get; set; }
        public DateTime? DataFim { get; set; }
        public string Duracao { get; set; }
        public string Ordem { get; set; }
    }
}
