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
    public class BrandsController : ControllerBase
    {

        private readonly IBrandService _brandService;


        public BrandsController(IBrandService brandService)
        {
            _brandService = brandService;
        }


        [Route("getbrands")]
        [HttpGet]
        public async Task<ActionResult> GetBrands()
        {
            List<Brands> brands = await _brandService.GetAll();

            if (brands != null)
            {
                return Ok(brands.Select(s => s.BrandName));
            }

            return BadRequest(new { message = "___WTF___" });
        }
    }
}
