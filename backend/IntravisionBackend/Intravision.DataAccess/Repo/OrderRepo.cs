using Intravision.Domain.Abstractions;
using Intravision.Domain.Models;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;




namespace Intravision.DataAccess.Repo
{
    public class OrderRepo : IOrderRepo
    {

        private readonly IntravisionDbContext _dbContext;

        public OrderRepo(IntravisionDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<List<Orders>> GetAll()
        {
            {
                var entities = await _dbContext.Orders.ToListAsync();
                return entities;
            }
        }


        //public async Task<byte> Update(byte denomination, int value)
        //{
        //    {
        //        await _dbContext.Coins
        //            .Where(coin => coin.Denomination == denomination)
        //            .ExecuteUpdateAsync(coin => coin
        //            .SetProperty(o => o.Quantity, o => value));

        //        return denomination;
        //    }
        //}
    }
}
