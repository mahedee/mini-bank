using TechTest.Core.Entities.Base;

namespace BasicBanking.Core.Entities
{
    public class Account : BaseEntity
    {
        public string AccountNumber { get; set; }
        public string AccountHolderName { get; set; }
        public decimal Balance { get; set; }
    }
}
