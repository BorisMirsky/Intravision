using Intravision.DataAccess.Repo;
using Intravision.Domain.Abstractions;
using Intravision.Domain.Models;





namespace Intravision.Application.Services
{
    public class GoodService : IGoodService
    {
        private readonly IGoodRepo _goodRepo;

        public GoodService(IGoodRepo goodRepo)
        {
            _goodRepo = goodRepo;
        }
        public async Task<List<Goods>>  GetAll() {
        {
            return await _goodRepo.GetAll();
        }
    }
    }
}
