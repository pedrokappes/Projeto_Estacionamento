

using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/carro")]
    public class CarroController : ControllerBase
    {
        [HttpPost]
        [Route("entradadecarro")]
        public Carro EntradaDeCarro(Carro carro)
        {     
            carro.Modelo += " 2020";
            return carro;
        }

        public Carro Listar(Carro carro)
        {   
            
            carro.Modelo += " Verde";
            return carro;
        }
        
    }
}