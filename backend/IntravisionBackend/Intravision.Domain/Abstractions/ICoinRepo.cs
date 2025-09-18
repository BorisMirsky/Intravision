using Intravision.Domain.Models;


namespace Intravision.Domain.Abstractions
{
    public interface ICoinRepo
    {
        Task<List<Coins>> GetAll();

        Task<byte> Update(byte denomination, int value);    
    }
}
