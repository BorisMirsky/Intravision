using Intravision.Domain.Models;


namespace Intravision.Domain.Abstractions
{
    public interface ICoinService
    {
        Task<List<Coins>> GetAll();

        Task<byte> Update(byte denomination, int value);
    }
}
