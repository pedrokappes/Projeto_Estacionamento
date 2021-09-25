using System.Collections.Generic;
using System.Linq;
using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;


namespace API.Controllers
{
    [ApiController]
    [Route("api/carro")]
    public class CarroController : ControllerBase
    {

        private readonly Banco _context;

        public CarroController( Banco context)
        {
            _context = context;

            
        }
        
        /*
        //================================================
        [HttpPost]
        [Route("teste")]
        public Carro teste()
        {     
            Carro carro = _context.TabelaCarros.Where(a => a.Placa == "aaa-111").FirstOrDefault();
            return carro;
        }
        //================================================
        */
        
        [HttpPost]
        [Route("entradadecarro")]
        public Carro EntradaDeCarro(Carro carro)
        {     
            _context.TabelaCarros.Add(carro);
            _context.SaveChanges();
            return carro;
        }

        [HttpGet]
        [Route("relacaodecarros")]
        public List<Carro> relacaodecarros()
        {
            return (_context.TabelaCarros.ToList());
        }

        [HttpGet]
        [Route("buscarporcarroid/{id}")]
        public IActionResult buscarporcarroid([FromRoute]int id)
        {
            Carro carro = _context.TabelaCarros.Find(id);
            return Ok(carro);
        }


        [HttpDelete]
        [Route("removerporcarronome/{placa}")]
        public IActionResult removerporcarronome([FromRoute]string placa)
        {
            Carro carro = _context.TabelaCarros.FirstOrDefault
            (
                carro => carro.Placa == placa
            );
            _context.TabelaCarros.Remove(carro);
            _context.SaveChanges();
            return Ok(carro);
        }

        [HttpDelete]
        [Route("removerporcarroid/{id}")]
        public IActionResult removerporcarroid([FromRoute]int id)
        {
            Carro carro = _context.TabelaCarros.FirstOrDefault
            (
                carro => carro.CarroId == id
            );
            _context.TabelaCarros.Remove(carro);
            _context.SaveChanges();
            return Ok(carro);
        }

        [HttpPut]
        [Route("atualizarporcarroid")]
        public IActionResult atualizarporcarroid([FromBody] Carro carro)
        {
            _context.TabelaCarros.Update(carro);
            _context.SaveChanges();
            return Ok(carro);
        }

    }
}