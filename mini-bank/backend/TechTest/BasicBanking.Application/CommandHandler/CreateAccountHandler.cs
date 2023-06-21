using AutoMapper;
using BasicBanking.Application.Commands;
using BasicBanking.Core.Entities;
using BasicBanking.Core.Interfaces;
using MediatR;

namespace BasicBanking.Application.CommandHandler
{
    public class CreateAccountHandler : IRequestHandler<CreateAccountCommand, Account>
    {
        private readonly IAccountRepository _accountRepository;
        private readonly IMapper _mapper;
        public CreateAccountHandler(IAccountRepository accountRepository, IMapper mapper)
        {
            _accountRepository = accountRepository;
            _mapper = mapper;
        }
        public async Task<Account> Handle(CreateAccountCommand request, CancellationToken cancellationToken)
        {
            var accountEntity = _mapper.Map<Account>(request);

            if (accountEntity is null)
            {
                throw new ApplicationException("There is a problem in mapper");
            }

            var newClient = await _accountRepository.AddAsync(accountEntity);
            //var clientResponse = _mapper.Map<ClientDTO>(newClient);
            return newClient;
        }
    }
}
