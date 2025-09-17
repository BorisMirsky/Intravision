using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Intravision.Domain.Models;
using Microsoft.EntityFrameworkCore;




namespace Intravision.DataAccess.Configuration
{
    public class GoodConfiguration : IEntityTypeConfiguration<Goods>
    {
        public void Configure(EntityTypeBuilder<Goods> builder)
        {

            builder.HasKey(p => p.Id);

            builder.HasOne(b => b.BrandName)
                .WithOne(d => d.Go)
                .HasForeignKey<Goods>("BrandId")
                .IsRequired();

            builder
                .HasMany(p => p.Orders)
                .WithOne(t => t.Goods);


            builder.Property(p => p.Id)
                .IsRequired();
            builder.Property(p => p.BrandId)
                .IsRequired();
            builder.Property(p => p.BrandName)
                .IsRequired();
            builder.Property(p => p.Price)
                .IsRequired();
            builder.Property(p => p.Quantity);
        }
    }
}
