using BasicBanking.Core.Entities;
using BasicBanking.Core.Interfaces;
using MediatR;


namespace BasicBanking.Application.Handlers.QueryHandlers
{
    public class GetAllAccountQueryHandler : IRequestHandler<GetAllAccountQuery, List<Account>>
    {
        private readonly IAccountRepository _accountRepository;

        public GetAllAccountQueryHandler(IAccountRepository accountRepository)
        {
            _accountRepository = accountRepository;
        }
        public async Task<List<Account>> Handle(GetAllAccountQuery request, CancellationToken cancellationToken)
        {
            return (List<Account>)await _accountRepository.GetAllAsync();
        }
    }
}
