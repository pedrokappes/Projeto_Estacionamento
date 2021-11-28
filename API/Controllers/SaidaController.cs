using System.Collections.Generic;
using System.Linq;
using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers {
    [ApiController]
    [Route("api/saida")]

    public class SaidaController : ControllerBase {
        
        private readonly Banco _context;

        public SaidaController(Banco context) {
            _context = context;
        }

        //Read - Listar relação de vaga
        [HttpGet]
        [Route("listasaida")]
         public IActionResult List() => Ok(_context.TabelaSaidas.Include(Saida => Saida.Pessoa).Include(Saida => Saida.Carro).ToList());
    
        //Gerando Saida - Adicionar saida de Carros
        [HttpPost]
        [Route("saida")]
        public IActionResult saida([FromBody] Saida saida) {
            int pessoaId = saida.PessoaId;
            int carroId = saida.CarroId;
            saida.Pessoa = _context.TabelaPessoas.Find(pessoaId);
            saida.Carro = _context.TabelaCarros.Find(carroId);
            _context.TabelaSaidas.Add(saida);
            _context.SaveChanges();
            // var carroDelete = _context.TabelaCarros.Find(carroId);
            // _context.TabelaCarros.Remove(carroDelete);
            //  var pessoaDelete = _context.TabelaPessoas.Find(pessoaId);
            // _context.TabelaPessoas.Remove(pessoaDelete);
            // _context.SaveChanges();
            return Created("", saida);
            
        }


        
        
    }
}

