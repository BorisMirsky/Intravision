
using Intravision.Domain.Abstractions;
using Intravision.Domain.Models;
using Microsoft.EntityFrameworkCore;



namespace Intravision.DataAccess.Repo
{
    public class GoodRepo : IGoodRepo
    {
        private readonly IntravisionDbContext _dbContext;

        public GoodRepo(IntravisionDbContext dbContext) 
        {
            _dbContext = dbContext;
        }

        public async Task<List<Goods>> GetAll()
        {
            {
                var entities = await _dbContext.Goods.ToListAsync();
                return entities;
            }
        }
    }
}
