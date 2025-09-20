using Intravision.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System.Reflection.Emit;




namespace Intravision.DataAccess.Configuration
{
    public class OrderConfiguration : IEntityTypeConfiguration<Orders>
    {

        public void Configure(EntityTypeBuilder<Orders> builder)
        {

            builder.HasKey(p => p.Id);

            // ?
            //builder.HasOne(b => b.Brands)
            //    .WithOne(d => d.Goods)
            //    .IsRequired();

            //builder
            //    .HasMany(p => p.Orders)
            //    .WithOne(t => t.Goods);

            builder.Property(p => p.Id)
                .IsRequired();
            builder.Property(p => p.OrderId)
                .IsRequired();
            builder.Property(p => p.BrandName)
                .IsRequired();
            builder.Property(p => p.DateTime)
                .IsRequired();
            builder.Property(p => p.Amount)
                .IsRequired();
            builder.Property(p => p.Quantity);
        }
    }
}
