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
    [Route("api/Users")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly AppDbContext _context;

        public UsersController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }

        // GET: api/Users/5
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(Guid id)
        {
            var user = await _context.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        // PUT: api/Users/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser(Guid id, User user)
        {
            if (id != user.UserId)
            {
                return BadRequest();
            }

            _context.Entry(user).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
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

        // POST: api/Users
        [HttpPost]
        public async Task<ActionResult<User>> PostUser([FromBody] User user)
        {
          if (!ModelState.IsValid)
          {
            foreach (var error in ModelState)
            {
              Console.WriteLine($"Erro no campo {error.Key}: {string.Join(", ", error.Value.Errors.Select(e => e.ErrorMessage))}");
            }
            return BadRequest(ModelState);
          }

          if (user.UserId == Guid.Empty)
            user.UserId = Guid.NewGuid();

          _context.Users.Add(user);
          await _context.SaveChangesAsync();
          Console.WriteLine("Usuário criado com sucesso:" + user.Name);
          return CreatedAtAction(nameof(GetUser), new { id = user.UserId }, user);
        }

        // DELETE: api/Users/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(Guid id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UserExists(Guid id)
        {
            return _context.Users.Any(e => e.UserId == id);
        }

        // --- NOVOS MÉTODOS ADICIONADOS ---

        // POST: api/Users/login
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest loginRequest)
        {
            if (loginRequest == null || string.IsNullOrEmpty(loginRequest.Email) || string.IsNullOrEmpty(loginRequest.Password))
            {
                return BadRequest(new { message = "Email e senha são obrigatórios." });
            }

            var user = await _context.Users
                .FirstOrDefaultAsync(u => u.Email.ToLower() == loginRequest.Email.ToLower());

            // ATENÇÃO: Esta é uma verificação de senha insegura, apenas para desenvolvimento.
            // O ideal é usar um sistema de hash para comparar as senhas.
            if (user == null || user.Password != loginRequest.Password)
            {
                return Unauthorized(new { message = "Email ou senha inválidos." });
            }

            // Se o login for bem-sucedido, pode-se gerar um token JWT (JSON Web Token) aqui no futuro.
            return Ok(new { message = "Login bem-sucedido!", userId = user.UserId, name = user.Name });
        }

        // POST: api/Users/request-password-reset
        [HttpPost("request-password-reset")]
        public IActionResult RequestPasswordReset([FromBody] PasswordResetRequest resetRequest)
        {
            if (resetRequest == null || string.IsNullOrEmpty(resetRequest.Email))
            {
                return BadRequest(new { message = "Email é obrigatório." });
            }

            Console.WriteLine($"Recebido pedido de reset de senha para o email: {resetRequest.Email}");

            return Ok(new { message = "Se um usuário com este email existir, um link de redefinição foi enviado." });
        }
    }

    public class LoginRequest
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }

    public class PasswordResetRequest
    {
        public string Email { get; set; }
    }
}
