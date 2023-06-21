using BasicBanking.Core.Interfaces;
using BasicBanking.Core.Interfaces.Base;
using BasicBanking.Infrastructure.Repository;
using BasicBanking.Infrastructure.Repository.Base;
using Microsoft.Extensions.DependencyInjection;

namespace BasicBanking.Infrastructure
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection services)
        {
            services.AddScoped(typeof(IRepository<>), typeof(Repository<>));
            services.AddTransient<IAccountRepository, AccountRepository>();
            services.AddTransient<ITransactionRepository, TransactionRepository>();

            return services;
        }
    }
}
