using BasicBanking.Core.Entities;
using MediatR;

namespace BasicBanking.Application.Commands
{
    public class CreateAccountCommand : IRequest<Account>
    {
        //public int Id { get; set; }
        public string AccountNumber { get; set; }
        public string AccountHolderName { get; set; }
        public decimal Balance { get; set; }
    }
}
