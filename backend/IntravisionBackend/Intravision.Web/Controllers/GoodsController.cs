using Intravision.Application.Services;
using Intravision.Domain.Abstractions;
using Intravision.Domain.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;



namespace Intravision.Web.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class GoodsController : ControllerBase
    {

        private readonly IGoodService _goodService;


        public GoodsController(IGoodService goodService) 
        {
            _goodService = goodService;
        }


        [Route("GetGoods")]
        [HttpGet]
        public async Task<ActionResult> GetGoods()
        {

            List<Goods> goods = await _goodService.GetAll();

            if (goods != null)
            {
                return Ok(goods);
            }

            return BadRequest(new { message = "___WTF___" });
        }
    }
}
