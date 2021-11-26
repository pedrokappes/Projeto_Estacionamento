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

        //Inicializando - Gerando uma nova vaga
        [HttpPost]
        [Route("inicial")]
        public IActionResult inicial()
        {
            _context.TabelaVagas.AddRange(new Vaga[]
                {
                    new Vaga { VagaId = 1, Status = "Livre" },
                    new Vaga { VagaId = 2, Status = "Livre" },
                    new Vaga { VagaId = 3, Status = "Livre" },
                }
            );
            _context.SaveChanges();
            return Ok(new { message = "Dados inicializados com sucesso!" });
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

