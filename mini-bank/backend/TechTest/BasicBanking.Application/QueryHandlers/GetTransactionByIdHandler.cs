using AutoMapper;
using BasicBanking.Application.Queries;
using BasicBanking.Core.Entities;
using BasicBanking.Core.Interfaces;
using Location.Application.Queries.Countries;
using MediatR;

namespace TechTest.Application.QueryHandlers
{
    public class GetTransactionByIdHandler : IRequestHandler<GetTransactionByIdQuery, Transaction>
    {
        private readonly ITransactionRepository _transactionRepository;
        private readonly IMapper _mapper;

        public GetTransactionByIdHandler(ITransactionRepository transactionRepository, IMapper mapper)
        {
            _transactionRepository = transactionRepository;
            _mapper = mapper;
        }
        public async Task<Transaction> Handle(GetTransactionByIdQuery request, CancellationToken cancellationToken)
        {
            var response = await _transactionRepository.GetAsync(request.Id);
            return response;
        }
    }
}
