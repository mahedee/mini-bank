using AutoMapper;
using BasicBanking.Application.Commands;
using BasicBanking.Core.Entities;
using BasicBanking.Core.Interfaces;
using MediatR;

namespace BasicBanking.Application.CommandHandler
{
    public class EditTransactionCommandHandler : IRequestHandler<EditTransactionCommand, Transaction>
    {
        private readonly ITransactionRepository _transactionRepository;
        private readonly IMapper _mapper;

        public EditTransactionCommandHandler(ITransactionRepository transactionRepository, IMapper mapper)
        {
            _transactionRepository = transactionRepository;
            _mapper = mapper;
        }
        public async Task<Transaction> Handle(EditTransactionCommand request, CancellationToken cancellationToken)
        {

            var transactionEntity = _mapper.Map<Transaction>(request);

            if (transactionEntity is null)
            {
                throw new ApplicationException("There is a problem in mapper");
            }

            try
            {
                await _transactionRepository.UpdateAsync(transactionEntity);
            }
            catch (Exception exp)
            {
                throw new ApplicationException(exp.Message);
            }

            var modifiedTransaction = await _transactionRepository.GetAsync(request.Id);
            return modifiedTransaction;
        }
    }
}
