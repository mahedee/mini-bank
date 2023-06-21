using BasicBanking.Core.Entities;
using MediatR;

namespace BasicBanking.Application.Queries
{
    public class GetTransactionByIdQuery : IRequest<Transaction>
    {
        public int Id { get; private set; }

        public GetTransactionByIdQuery(int id)
        {
            this.Id = id;
        }
    }
   

}
