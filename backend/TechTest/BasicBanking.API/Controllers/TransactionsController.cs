using BasicBanking.Application;
using BasicBanking.Application.Commands;
using BasicBanking.Application.Queries;
using BasicBanking.Core.Entities;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace TechTest.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransactionsController : ControllerBase
    {

        private readonly IMediator _mediator;

        public TransactionsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        // GET: api/Transactiontions/GetAll
        [HttpGet("GetAll")]
        public async Task<IEnumerable<Transaction>> GetTransactions()
        {
            var response = await  _mediator.Send(new GetAllTransactionQuery());
            return response;
        }

        //GET: api/Transactions/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Transaction>> GetTransaction(int id)
        {

            var response = await _mediator.Send(new GetTransactionByIdQuery(id));
            if (response == null)
            {
                return NotFound("Transaction information not found");
            }
            return Ok(response);
        }



        // POST: api/Transactions/Add
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("Add")]
        public async Task<ActionResult<Transaction>> PostTransaction([FromBody] CreateTransactionCommand command)
        {

            var response = await _mediator.Send(command);
            return Ok(response);
        }

        // PUT: api/Transactions/Edit/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("Edit/{id}")]
        public async Task<IActionResult> PutTransactions(int id, [FromBody] EditTransactionCommand command)
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

        // DELETE: api/Accounts/Delete/5
        [HttpDelete("Delete/{id}")]
        public async Task<IActionResult> DeleteClient(int id)
        {
            try
            {
                string result = string.Empty;
                result = await _mediator.Send(new DeleteTransactionCommand(id));
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
