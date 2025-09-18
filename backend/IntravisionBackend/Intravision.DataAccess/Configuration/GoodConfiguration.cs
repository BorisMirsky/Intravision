using Intravision.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System.Reflection.Emit;




namespace Intravision.DataAccess.Configuration
{
    public class GoodConfiguration : IEntityTypeConfiguration<Goods>
    {
        public void Configure(EntityTypeBuilder<Goods> builder)
        {

            builder.HasKey(p => p.Id);

            // ?
            //builder.HasOne(b => b.Brands)
            //    .WithOne(d => d.Goods)
            //    .IsRequired();

            //modelBuilder
            //.Entity<User>()
            //.HasOne(u => u.Profile)
            //.WithOne(p => p.User)
            //.HasForeignKey<UserProfile>(p => p.UserKey);

            //builder
            //    .HasMany(p => p.Orders)
            //    .WithOne(t => t.Goods);


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
