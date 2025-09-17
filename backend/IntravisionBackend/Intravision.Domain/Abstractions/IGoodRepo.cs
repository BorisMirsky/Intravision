using Intravision.Domain.Models;



namespace Intravision.Domain.Abstractions
{
    public interface IGoodRepo
    {
        Task<List<Goods>> GetAll();
    }
}
