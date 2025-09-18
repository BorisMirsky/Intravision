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
    public class CoinsController : ControllerBase
    {

        private readonly ICoinService _coinService;


        public CoinsController(ICoinService coinService)
        {
            _coinService = coinService;
        }


        [Route("GetCoins")]
        [HttpGet]
        public async Task<ActionResult> GetCoins()
        {
            List<Coins> coins = await _coinService.GetAll();

            if (coins != null)
            {
                return Ok(coins);
            }

            return BadRequest(new { message = "___WTF___" });
        }

        [HttpPut] //("{id:guid}")]
        public async Task<ActionResult<byte>> Update([FromBody] CoinRequest request)
        {
            await _coinService.Update(request.Denomination, request.Quantity);
            return Ok(request.Denomination);
        }
    }
}
