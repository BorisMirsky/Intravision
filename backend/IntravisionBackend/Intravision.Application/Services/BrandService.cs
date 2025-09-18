using Intravision.DataAccess.Repo;
using Intravision.Domain.Abstractions;
using Intravision.Domain.Models;



namespace Intravision.Application.Services
{
    public class BrandService : IBrandService
    {
        private readonly IBrandRepo _brandRepo;

        public BrandService(IBrandRepo brandRepo)
        {
            _brandRepo = brandRepo;
        }

        public async Task<List<Brands>> GetAll()
        {
            return await _brandRepo.GetAll();
        }
    }
}
