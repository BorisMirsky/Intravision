using Intravision.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;
using Microsoft.Extensions.Logging;
using System.Data;
using System.Numerics;

namespace Intravision.DataAccess
{
    public class IntravisionDbContext : DbContext
    {
        public IntravisionDbContext(DbContextOptions<IntravisionDbContext> options)
                : base(options)
        {
            //Database.EnsureCreated();
        }

        public DbSet<Goods> Goods { get; set; } = null!;
        public DbSet<Coins> Coins { get; set; } = null!;
        public DbSet<Brands> Brands { get; set; } = null!;
        //public DbSet<Orders> Orders { get; set; } = null!;


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        { }

        // Fluent API
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new Configuration.GoodConfiguration());
            modelBuilder.ApplyConfiguration(new Configuration.CoinConfiguration());
            modelBuilder.ApplyConfiguration(new Configuration.BrandConfiguration());
            //modelBuilder.ApplyConfiguration(new Configuration.OrderConfiguration());
            base.OnModelCreating(modelBuilder);
        }
    }
}
