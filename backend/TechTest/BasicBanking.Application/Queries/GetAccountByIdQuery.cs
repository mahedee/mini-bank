using BasicBanking.Core.Entities;
using MediatR;
using TechTest.Application.DTOs;

namespace Location.Application.Queries.Countries
{
    public class GetAccountByIdQuery : IRequest<Account>
    {
        public int Id { get; private set; }

        public GetAccountByIdQuery(int id)
        {
            this.Id = id;
        }
    }
   

}
