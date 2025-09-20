using Intravision.Application.Services;
using Intravision.Domain.Abstractions;
using Intravision.Domain.Models;
using Intravision.Web.Contracts;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;




namespace Intravision.Web.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {

        private readonly IOrderService _orderService;


        public OrdersController(IOrderService orderService)
        {
            _orderService = orderService;
        }


        [Route("GetOrders")]
        [HttpGet]
        public async Task<ActionResult> GetOrders()
        {
            List<Orders> orders = await _orderService.GetAll();
            return Ok(orders);

            //if (orders != null)
            //{
            //    return Ok(orders);
            //}
            //return BadRequest(new { message = "___WTF___" });
        }

        //[HttpPut] //("{id:guid}")]
        //public async Task<ActionResult<byte>> Update([FromBody] OrderRequest request)
        //{
        //    await _orderService.Update(request.Denomination, request.Quantity);
        //    return Ok(request.Denomination);
        //}

    }
}
