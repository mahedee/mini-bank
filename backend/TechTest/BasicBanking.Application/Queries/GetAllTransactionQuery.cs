using BasicBanking.Core.Entities;
using MediatR;

namespace BasicBanking.Application
{
    public record GetAllTransactionQuery : IRequest<List<Transaction>>
    {

    }
}
