using BasicBanking.Application.Commands;
using BasicBanking.Core.Interfaces;
using MediatR;

namespace BasicBanking.Application.CommandHandler
{
    public class DeleteAccountHandler : IRequestHandler<DeleteAccountCommand, String>
    {
        private readonly IAccountRepository _accountRepository;

        public DeleteAccountHandler(IAccountRepository accountRepository)
        {
            _accountRepository = accountRepository;
        }

        public async Task<string> Handle(DeleteAccountCommand request, CancellationToken cancellationToken)
        {
            try
            {
                var accountEntity = await _accountRepository.GetAsync(request.Id);

                await _accountRepository.DeleteAsync(accountEntity);
            }
            catch (Exception exp)
            {
                throw (new ApplicationException(exp.Message));
            }

            return "Account information has been deleted!";
        }
    }
}
