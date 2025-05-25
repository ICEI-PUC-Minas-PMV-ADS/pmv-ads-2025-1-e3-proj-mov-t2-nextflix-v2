using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Nextflix.Data;
using Nextflix.Models;
using NextFlix.Models;
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

        // GET: api/Comments/all
        [HttpGet("all")]
        public async Task<ActionResult<IEnumerable<Comment>>> GetAllComments()
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

        // PUT: api/Comments/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutComment(Guid id, Comment comment)
        {
            if (id != comment.CommentId)
            {
                return BadRequest();
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
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Comment>> PostComment(Comment comment)
        {
            _context.Comments.Add(comment);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetComment", new { id = comment.CommentId }, comment);
        }

        // DELETE: api/Comments/5
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
