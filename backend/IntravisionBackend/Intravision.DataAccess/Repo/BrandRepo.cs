using Intravision.Domain.Abstractions;
using Intravision.Domain.Models;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;



namespace Intravision.DataAccess.Repo
{
    public class BrandRepo : IBrandRepo
    {

        private readonly IntravisionDbContext _dbContext;

        public BrandRepo(IntravisionDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<List<Brands>> GetAll()
        {
            {
                var entities = await _dbContext.Brands.ToListAsync();
                return entities;
            }
        }
    }
}
