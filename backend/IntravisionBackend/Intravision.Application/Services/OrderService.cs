using Intravision.Domain.Abstractions;
using Intravision.Domain.Models;




namespace Intravision.Application.Services
{
    public class OrderService : IOrderService
    {
        private readonly IOrderRepo _orderRepo;

        public OrderService(IOrderRepo orderRepo)
        {
            _orderRepo = orderRepo;
        }

        public async Task<List<Orders>> GetAll()
        {
            return await _orderRepo.GetAll();
        }

        //public async Task<byte> Update(byte denomination, int value)
        //{
        //    return await _coinRepo.Update(denomination, value);
        //}

    }
}
