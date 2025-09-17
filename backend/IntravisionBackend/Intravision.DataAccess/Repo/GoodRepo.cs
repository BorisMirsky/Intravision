
using Intravision.Domain.Abstractions;
using Intravision.Domain.Models;
//using Intravision.Application.Scripts;
using Intravision.DataAccess;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System.Diagnostics;




namespace Intravision.DataAccess.Repo
{
    public class GoodRepo : IGoodRepo
    {
        private readonly IntravisionDbContext _dbContext;
        //private readonly IConfiguration _configuration;
        public GoodRepo(IntravisionDbContext dbContext) //, IConfiguration configuration)
        {
            _dbContext = dbContext;
            //_configuration = configuration;
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
