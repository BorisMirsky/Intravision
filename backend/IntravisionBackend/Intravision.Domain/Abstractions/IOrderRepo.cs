using Intravision.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Intravision.Domain.Abstractions
{
    public interface IOrderRepo
    {
        Task<List<Orders>> GetAll();

        //Task<byte> Update(byte denomination, int value);
    }
}
