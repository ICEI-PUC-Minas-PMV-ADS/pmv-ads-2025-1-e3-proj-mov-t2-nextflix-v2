using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Nextflix.Data;
using Nextflix.Models;
using Nextflix.Models.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nextflix.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public CommentsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Comments
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Comment>>> GetComments()
        {
            return await _context.Comments.ToListAsync();
        }

        // GET: api/Comments/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Comment>> GetComment(Guid id)
        {
            var comment = await _context.Comments.FindAsync(id);

            if (comment == null)
            {
                return NotFound();
            }

            return comment;
        }

        // PUT: api/Comments/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> PutComment(Guid id, Comment comment)
        {
            if (id != comment.CommentId)
            {
                return BadRequest();
            }

            // Verifica se o filme existe
            var movieExists = await _context.Movies.AnyAsync(m => m.MovieId == comment.MovieId);
            if (!movieExists)
            {
                return BadRequest("Movie not found.");
            }

            // Verifica se o usuário existe
            var userExists = await _context.Users.AnyAsync(u => u.UserId == comment.UserId);
            if (!userExists)
            {
                return BadRequest("User not found.");
            }

            _context.Entry(comment).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CommentExists(id))
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

        // POST: api/Comments
        [HttpPost]
        public async Task<ActionResult<Comment>> PostComment([FromBody] CreateCommentDto commentDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // Verifica se o filme existe
            var movieExists = await _context.Movies.AnyAsync(m => m.MovieId == commentDto.MovieId);
            if (!movieExists)
            {
                return BadRequest("Movie not found.");
            }

            // Verifica se o usuário existe, somente se UserId foi informado
            if (commentDto.UserId != null)
            {
                var userExists = await _context.Users.AnyAsync(u => u.UserId == commentDto.UserId);
                if (!userExists)
                {
                    return BadRequest("User not found.");
                }
            }
            // Cria o objeto Comment a partir do DTO
            var comment = new Comment
            {
                CommentId = Guid.NewGuid(),
                MovieId = commentDto.MovieId,
                UserId = commentDto.UserId,
                Text = commentDto.Text,
                DateCreated = DateTime.UtcNow
            };

            _context.Comments.Add(comment);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetComment", new { id = comment.CommentId }, comment);
        }

        // DELETE: api/Comments/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteComment(Guid id)
        {
            var comment = await _context.Comments.FindAsync(id);
            if (comment == null)
            {
                return NotFound();
            }

            _context.Comments.Remove(comment);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CommentExists(Guid id)
        {
            return _context.Comments.Any(e => e.CommentId == id);
        }

        // GET: api/Comments/movie/{movieId}
        [HttpGet("movie/{movieId}")]
        public async Task<ActionResult<IEnumerable<Comment>>> GetCommentsByMovie(Guid movieId)
        {
            return await _context.Comments
                .Where(c => c.MovieId == movieId)
                .ToListAsync();
        }
    }
}