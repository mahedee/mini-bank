using BasicBanking.Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace BasicBanking.Infrastructure.Persistence
{
    public class BasicBankingContext : DbContext
    {
        public BasicBankingContext(DbContextOptions<BasicBankingContext> options) : base(options)
        {

        }
        public DbSet<Account> Accounts { get; set; }
        public DbSet<Transaction> Transactions { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //modelBuilder.Entity<Client>()
            //       .HasMany(e => e.Packages)
            //       .WithOne(e => e.Client)
            //       .HasForeignKey(e => e.ClientId)
            //       .HasPrincipalKey(e => e.Id);

            base.OnModelCreating(modelBuilder);
        }
    }
}
