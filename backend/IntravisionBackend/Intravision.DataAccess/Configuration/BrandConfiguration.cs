using Intravision.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Emit;
using System.Text;
using System.Threading.Tasks;




namespace Intravision.DataAccess.Configuration
{
    public class BrandConfiguration : IEntityTypeConfiguration<Brands>
    {
        public void Configure(EntityTypeBuilder<Brands> builder)
        {

            builder.HasKey(p => p.Id);

            builder.HasOne(b => b.Goods)
                .WithOne(d => d.Brands)
                .HasForeignKey<Goods>("BrandId")
                .IsRequired();

            builder.Property(p => p.Id)
                .IsRequired();
            builder.Property(p => p.BrandName)
                .IsRequired();

        }
    }
}