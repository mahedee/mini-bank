using BasicBanking.Core.Entities;
using MediatR;

namespace BasicBanking.Application
{
    public record GetAllAccountQuery : IRequest<List<Account>>
    {

    }
}
