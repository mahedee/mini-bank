using AutoMapper;
using BasicBanking.Core.Entities;
using BasicBanking.Core.Interfaces;
using Location.Application.Queries.Countries;
using MediatR;

namespace TechTest.Application.QueryHandlers
{
    public class GetAccountByIdHandler : IRequestHandler<GetAccountByIdQuery, Account>
    {
        private readonly IAccountRepository _accountRepository;
        private readonly IMapper _mapper;

        public GetAccountByIdHandler(IAccountRepository accountRepository, IMapper mapper)
        {
            _accountRepository = accountRepository;
            _mapper = mapper;
        }
        public async Task<Account> Handle(GetAccountByIdQuery request, CancellationToken cancellationToken)
        {
            var response = await _accountRepository.GetAsync(request.Id);
            //var clientReponse = _mapper.Map<ClientDTO>(client);
            //return clientReponse;

            return response;
        }
    }
}
