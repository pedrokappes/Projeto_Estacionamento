using System.Collections.Generic;
using System.Linq;
using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;

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

        public IActionResult Create([FromBody] Vaga vaga) {
            _context.TabelaVagas.Add(vaga);
            _context.SaveChanges();
            return Created("", vaga);
        }


        //Read - Listar relação de vaga
        [HttpGet]
        [Route("relacaodevagas")]
        public IActionResult List() => Ok(_context.TabelaVagas.ToList());


        //Buscar - realizar buscar de vaga por ID
        [HttpGet]
        [Route("buscarporvagaid/{id}")]
        public IActionResult buscarporvagaid([FromRoute]int id) {
            Vaga vaga = _context.TabelaVagas.Find(id);

            if(vaga == null) {
                return NotFound();
            }

            return Ok(vaga);
        }

                
        //Upgrade - Atualizar informações dos carros listados por ID
        [HttpPut]
        [Route("atualizarporvagaid")]
        public IActionResult atualizarporvagaid([FromBody] Vaga vaga) {

            _context.TabelaVagas.Update(vaga);
            _context.SaveChanges();
            return Ok(vaga);
        }


        //Delete - Excluir vaga por ID
        [HttpDelete]
        [Route("removerporvagaid/{id}")]
        public IActionResult removerporvagaid ([FromRoute]int id) {

            Vaga vaga = _context.TabelaVagas.FirstOrDefault (
                vaga => vaga.VagaId == id
            );

            if(vaga == null){
                return NotFound();
            }
            _context.TabelaVagas.Remove(vaga);
            _context.SaveChanges();
            return Ok(vaga);
        }
    }
}

