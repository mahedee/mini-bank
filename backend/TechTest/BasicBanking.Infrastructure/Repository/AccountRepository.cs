using BasicBanking.Core.Entities;
using BasicBanking.Core.Interfaces;
using BasicBanking.Infrastructure.Persistence;
using BasicBanking.Infrastructure.Repository.Base;

namespace BasicBanking.Infrastructure.Repository
{

    public class AccountRepository : Repository<Account>, IAccountRepository
    {
        public AccountRepository(BasicBankingContext context) : base(context)
        {

        }
    }


}
