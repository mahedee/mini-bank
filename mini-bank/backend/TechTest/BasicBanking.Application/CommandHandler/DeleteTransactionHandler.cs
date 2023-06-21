using BasicBanking.Application.Commands;
using BasicBanking.Core.Interfaces;
using MediatR;

namespace BasicBanking.Application.CommandHandler
{
    public class DeleteTransactionHandler : IRequestHandler<DeleteTransactionCommand, String>
    {
        private readonly ITransactionRepository _transactionRepository;

        public DeleteTransactionHandler(ITransactionRepository transactionRepository)
        {
            _transactionRepository = transactionRepository;
        }

        public async Task<string> Handle(DeleteTransactionCommand request, CancellationToken cancellationToken)
        {
            try
            {
                var transactionEntity = await _transactionRepository.GetAsync(request.Id);

                await _transactionRepository.DeleteAsync(transactionEntity);
            }
            catch (Exception exp)
            {
                throw (new ApplicationException(exp.Message));
            }

            return "Transaction information has been deleted!";
        }
    }
}
