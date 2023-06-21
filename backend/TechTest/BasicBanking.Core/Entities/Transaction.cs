using TechTest.Core.Entities.Base;

namespace BasicBanking.Core.Entities
{
    public class Transaction : BaseEntity
    {
        public int AccountID { get; set; }
        public decimal TransactionAmount { get; set; }
        public short TransactionMode { get; set; }  // 1 = Deposit, 2 = Withdraw
        public DateTime TransactionDate { get; set; }
    }
}
