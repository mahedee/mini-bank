using BasicBanking.Core.Entities;
using BasicBanking.Core.Interfaces;
using BasicBanking.Infrastructure.Persistence;
using BasicBanking.Infrastructure.Repository.Base;

namespace BasicBanking.Infrastructure.Repository
{

    public class TransactionRepository : Repository<Transaction>, ITransactionRepository
    {
        public TransactionRepository(BasicBankingContext context) : base(context)
        {

        }
    }


}
