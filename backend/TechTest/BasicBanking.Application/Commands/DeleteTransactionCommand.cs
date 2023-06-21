using MediatR;
using TechTest.Application.DTOs;

namespace BasicBanking.Application.Commands
{
    public class DeleteTransactionCommand : IRequest<String>
    {
        public int Id { get; private set; }

        public DeleteTransactionCommand(int Id)
        {
            this.Id = Id;
        }
    }
}
