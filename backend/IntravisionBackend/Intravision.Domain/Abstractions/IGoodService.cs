using Intravision.Domain.Models;



namespace Intravision.Domain.Abstractions
{
    public interface IGoodService
    {
        //Task<Patient> Get(Guid id);
        Task<List<Goods>> GetAll();
    }
}
