using System;
using Intravision.DataAccess.Repo;
using Intravision.Domain.Abstractions;
using Intravision.Domain.Models;




namespace Intravision.Application.Services
{
    public class CoinService : ICoinService
    {

        private readonly ICoinRepo _coinRepo;

        public CoinService(ICoinRepo coinRepo)
        {
            _coinRepo = coinRepo;
        }

        public async Task<List<Coins>> GetAll()
        {
            return await _coinRepo.GetAll();
        }

        public async Task<byte> Update(byte denomination, int value)
        {
            return await _coinRepo.Update(denomination, value);
        }
    }
}
