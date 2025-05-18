using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Nextflix.Data;
using Nextflix.Models;

namespace Nextflix.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomFilmListsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public CustomFilmListsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/CustomFilmLists
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CustomFilmList>>> GetCustomFilmList()
        {
            return await _context.CustomFilmList.ToListAsync();
        }

        // GET: api/CustomFilmLists/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CustomFilmList>> GetCustomFilmList(int id)
        {
            var customFilmList = await _context.CustomFilmList.FindAsync(id);

            if (customFilmList == null)
            {
                return NotFound();
            }

            return customFilmList;
        }

        // PUT: api/CustomFilmLists/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCustomFilmList(int id, CustomFilmList customFilmList)
        {
            if (id != customFilmList.Id)
            {
                return BadRequest();
            }

            _context.Entry(customFilmList).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CustomFilmListExists(id))
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

        // POST: api/CustomFilmLists
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<CustomFilmList>> PostCustomFilmList(CustomFilmList customFilmList)
        {
            _context.CustomFilmList.Add(customFilmList);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCustomFilmList", new { id = customFilmList.Id }, customFilmList);
        }

        // DELETE: api/CustomFilmLists/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCustomFilmList(int id)
        {
            var customFilmList = await _context.CustomFilmList.FindAsync(id);
            if (customFilmList == null)
            {
                return NotFound();
            }

            _context.CustomFilmList.Remove(customFilmList);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CustomFilmListExists(int id)
        {
            return _context.CustomFilmList.Any(e => e.Id == id);
        }
    }
}
