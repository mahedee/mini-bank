using BasicBanking.Core.Entities;
using BasicBanking.Core.Interfaces;
using MediatR;


namespace BasicBanking.Application.Handlers.QueryHandlers
{
    public class GetAllTransactionQueryHandler : IRequestHandler<GetAllTransactionQuery, List<Transaction>>
    {
        private readonly ITransactionRepository _transactionRepository;

        public GetAllTransactionQueryHandler(ITransactionRepository transactionRepository)
        {
            _transactionRepository = transactionRepository;
        }
        public async Task<List<Transaction>> Handle(GetAllTransactionQuery request, CancellationToken cancellationToken)
        {
            return (List<Transaction>)await _transactionRepository.GetAllAsync();
        }
    }
}
