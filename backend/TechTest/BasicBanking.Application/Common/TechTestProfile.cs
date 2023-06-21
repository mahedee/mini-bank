using AutoMapper;
using BasicBanking.Application.Commands;
using BasicBanking.Core.Entities;

namespace TechTest.Application.Common
{
    public class TechTestProfile : Profile
    {
        public TechTestProfile()
        {

            CreateMap<Account, CreateAccountCommand>().ReverseMap();
            CreateMap<Account, EditAccountCommand>().ReverseMap();
            CreateMap<Transaction, CreateTransactionCommand>().ReverseMap();
            CreateMap<Transaction, EditTransactionCommand>().ReverseMap();


        }

    }
}
