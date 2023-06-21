using MediatR;
using TechTest.Application.DTOs;

namespace BasicBanking.Application.Commands
{
    public class DeleteAccountCommand : IRequest<String>
    {
        public int Id { get; private set; }

        public DeleteAccountCommand(int Id)
        {
            this.Id = Id;
        }
    }
}
