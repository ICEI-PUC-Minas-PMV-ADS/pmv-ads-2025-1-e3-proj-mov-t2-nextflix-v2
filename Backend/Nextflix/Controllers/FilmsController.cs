using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Nextflix.Data;
using Nextflix.Models;
using Nextflix.DTOs;

namespace Nextflix.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FilmsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public FilmsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Films
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Movie>>> GetFilms()
        {
            return await _context.Movies.ToListAsync();
        }

        // GET: api/Films/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Movie>> GetFilm(Guid id)
        {
            var film = await _context.Movies.FindAsync(id);

            if (film == null)
            {
                return NotFound();
            }

            return film;
        }

        // PUT: api/Films/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFilm(Guid id, Movie film)
        {
            if (id != film.MovieId)
            {
                return BadRequest();
            }

            _context.Entry(film).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FilmExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Films
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Movie>> PostFilm(Movie film)
        {
            _context.Movies.Add(film);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFilm", new { id = film.MovieId }, film);
        }

        // DELETE: api/Films/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFilm(Guid id)
        {
            var film = await _context.Movies.FindAsync(id);
            if (film == null)
            {
                return NotFound();
            }

            _context.Movies.Remove(film);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool FilmExists(Guid MovieID)
        {
            return _context.Movies.Any(e => e.MovieId == MovieID);
        }

        // POST: api/Films/filter
        [HttpPost("filter")]
        public async Task<ActionResult<IEnumerable<Movie>>> FilterFilms([FromBody] MovieFilterDTO filter)
        {
            var query = _context.Movies.AsQueryable();

            if (!string.IsNullOrEmpty(filter.Genero))
                query = query.Where(f => f.Genre == filter.Genero);

            if (!string.IsNullOrEmpty(filter.Avaliacao) && int.TryParse(filter.Avaliacao, out int avaliacao))
                query = query.Where(f => f.Rating >= avaliacao);

            if (filter.DataInicio != null)
                query = query.Where(f => f.ReleaseDate >= filter.DataInicio);

            if (filter.DataFim != null)
                query = query.Where(f => f.ReleaseDate <= filter.DataFim);

            var result = await query.ToListAsync();

            if (!string.IsNullOrEmpty(filter.Duracao)) //faz o filtro que precisa ser feito antes de ir pro banco ja que ele não le int.parse 
            {
                result = result.Where(f =>
                {
                    if (!int.TryParse(f.Duration, out int duracao)) return false;

                    return filter.Duracao switch
                    {
                        "1" => duracao < 90,
                        "2" => duracao >= 90 && duracao <= 120,
                        "3" => duracao > 120 && duracao <= 150,
                        "4" => duracao > 150 && duracao <= 180,
                        "5" => duracao > 180,
                        _ => true
                    };
                }).ToList();
            }

            // Ordenação final (também já em memória)
            result = filter.Ordem switch
            {
                "1" => result.OrderBy(f => f.Name).ToList(),
                "2" => result.OrderByDescending(f => f.Rating).ToList(),
                "3" => result.OrderByDescending(f => f.ReleaseDate).ToList(),
                "4" => result.OrderByDescending(f => int.TryParse(f.Duration, out var d) ? d : 0).ToList(),
                _ => result
            };

            return Ok(result);
        }

    }
}
