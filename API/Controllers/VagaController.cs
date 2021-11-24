using System.Collections.Generic;
using System.Linq;
using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers {
    [ApiController]
    [Route("api/vaga")]

    public class VagaController : ControllerBase {
        
        private readonly Banco _context;

        public VagaController(Banco context) {
            _context = context;
        }


        //Create - Adicionar uma nova vaga
        [HttpPost]
        [Route("novavaga")]

        public IActionResult novavaga([FromBody] Vaga vaga) {
            int carroId = vaga.CarroId;
            vaga.Carro = _context.TabelaCarros.Find(carroId);
            _context.TabelaVagas.Add(vaga);
            _context.SaveChanges();
            return Created("", vaga);
        }


        //Read - Listar relação de vaga
        [HttpGet]
        [Route("listavagas")]
        public IActionResult List() => Ok(_context.TabelaVagas.ToList());
                
        //Upgrade - Atualizar informações dos carros listados por ID
        [HttpPut]
        [Route("atualizarvaga")]
        public IActionResult atualizarvaga([FromBody] Vaga vaga) {

            _context.TabelaVagas.Update(vaga);
            _context.SaveChanges();
            return Ok(vaga);
        }
    }
}

