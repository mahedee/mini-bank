using AutoMapper;
using BasicBanking.Application.Commands;
using BasicBanking.Core.Entities;
using BasicBanking.Core.Interfaces;
using MediatR;

namespace BasicBanking.Application.CommandHandler
{
    public class EditAccountCommandHandler : IRequestHandler<EditAccountCommand, Account>
    {
        private readonly IAccountRepository _accountRepository;
        private readonly IMapper _mapper;

        public EditAccountCommandHandler(IAccountRepository accountRepository, IMapper mapper)
        {
            _accountRepository = accountRepository;
            _mapper = mapper;
        }
        public async Task<Account> Handle(EditAccountCommand request, CancellationToken cancellationToken)
        {

            var accountEntity = _mapper.Map<Account>(request);

            if (accountEntity is null)
            {
                throw new ApplicationException("There is a problem in mapper");
            }

            try
            {
                await _accountRepository.UpdateAsync(accountEntity);
            }
            catch (Exception exp)
            {
                throw new ApplicationException(exp.Message);
            }

            var modifiedClient = await _accountRepository.GetAsync(request.Id);
            //var clientResponse = _mapper.Map<ClientDTO>(modifiedClient);

            return modifiedClient;
        }
    }
}
