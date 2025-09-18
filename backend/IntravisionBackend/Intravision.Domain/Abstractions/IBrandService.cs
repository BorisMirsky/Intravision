using Intravision.Domain.Models;


namespace Intravision.Domain.Abstractions
{
    public interface IBrandService
    {
        Task<List<Brands>> GetAll();
    }
}
