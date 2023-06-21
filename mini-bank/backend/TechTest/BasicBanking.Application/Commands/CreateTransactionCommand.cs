using BasicBanking.Core.Entities;
using MediatR;

namespace BasicBanking.Application.Commands
{
    public class CreateTransactionCommand : IRequest<Transaction>
    {
        //public int Id { get; set; }
        public int AccountID { get; set; }
        public decimal TransactionAmount { get; set; }
        public short TransactionMode { get; set; }  // 1 = Deposit, 2 = Withdraw
        public DateTime TransactionDate { get; set; }
    }
}
