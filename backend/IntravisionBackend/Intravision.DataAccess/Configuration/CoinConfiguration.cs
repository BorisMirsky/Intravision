using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Intravision.Domain.Models;
using Microsoft.EntityFrameworkCore;





namespace Intravision.DataAccess.Configuration
{
    public class CoinConfiguration : IEntityTypeConfiguration<Coins>
    {
        public void Configure(EntityTypeBuilder<Coins> builder)
        {

            builder.HasKey(p => p.Id);

            builder.Property(p => p.Id)
                .IsRequired();
            builder.Property(p => p.Denomination)
                .IsRequired();
            builder.Property(p => p.Quantity)
                .IsRequired();
        }
    }
}

