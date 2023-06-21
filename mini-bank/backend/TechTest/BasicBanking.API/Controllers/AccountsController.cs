using BasicBanking.Application;
using BasicBanking.Application.Commands;
using BasicBanking.Core.Entities;
using Location.Application.Queries.Countries;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace TechTest.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountsController : ControllerBase
    {

        private readonly IMediator _mediator;

        public AccountsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        // GET: api/Accounts
        [HttpGet("GetAll")]
        public async Task<IEnumerable<Account>> GetAccounts()
        {
            var response = await  _mediator.Send(new GetAllAccountQuery());
            return response;
        }

        //GET: api/Accounts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Account>> GetClient(int id)
        {

            var response = await _mediator.Send(new GetAccountByIdQuery(id));
            if (response == null)
            {
                return NotFound("Account information not found");
            }
            return Ok(response);
        }

        // PUT: api/Accounts/Edit/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("Edit/{id}")]
        public async Task<IActionResult> PutClient(int id, [FromBody] EditAccountCommand command)
        {

            try
            {
                if (command.Id == id)
                {
                    var result = await _mediator.Send(command);
                    return Ok(result);
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception exp)
            {
                return BadRequest(exp.Message);
            }
        }

        // POST: api/Accounts/Add
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("Add")]
        public async Task<ActionResult<Account>> PostClient([FromBody] CreateAccountCommand command)
        {

            var response = await _mediator.Send(command);
            return Ok(response);
        }

        // DELETE: api/Accounts/Delete/5
        [HttpDelete("Delete/{id}")]
        public async Task<IActionResult> DeleteClient(int id)
        {
            try
            {
                string result = string.Empty;
                result = await _mediator.Send(new DeleteAccountCommand(id));
                return Ok(result);
            }
            catch (Exception exp)
            {
                return BadRequest(exp.Message);
            }
        }

        //private bool ClientExists(int id)
        //{
        //    return (_context.Clients?.Any(e => e.Id == id)).GetValueOrDefault();
        //}
    }
}
