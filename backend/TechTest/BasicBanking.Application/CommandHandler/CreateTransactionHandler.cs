using AutoMapper;
using BasicBanking.Application.Commands;
using BasicBanking.Core.Entities;
using BasicBanking.Core.Interfaces;
using MediatR;

namespace BasicBanking.Application.CommandHandler
{
    public class CreateTransactionHandler : IRequestHandler<CreateTransactionCommand, Transaction>
    {
        private readonly ITransactionRepository _transactionRepository;
        private readonly IMapper _mapper;
        public CreateTransactionHandler(ITransactionRepository transactionRepository, IMapper mapper)
        {
            _transactionRepository = transactionRepository;
            _mapper = mapper;
        }
        public async Task<Transaction> Handle(CreateTransactionCommand request, CancellationToken cancellationToken)
        {
            var transactionEntity = _mapper.Map<Transaction>(request);

            if (transactionEntity is null)
            {
                throw new ApplicationException("There is a problem in mapper");
            }

            var newTransaction = await _transactionRepository.AddAsync(transactionEntity);
            return newTransaction;
        }
    }
}
