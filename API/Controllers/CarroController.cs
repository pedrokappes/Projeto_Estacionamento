using System.Collections.Generic;
using System.Linq;
using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers {

    [ApiController]
    [Route("api/carro")]
    public class CarroController : ControllerBase {
        
        private readonly Banco _context;

        public CarroController( Banco context) {
            _context = context;
        }


        //Create - Adicionar entrada de Carros
        [HttpPost]
        [Route("entradadecarro")]
        public IActionResult Create([FromBody] Carro carro) {
            int pessoaId = carro.PessoaId;
            carro.Pessoa = _context.TabelaPessoas.Find(pessoaId);
            _context.TabelaCarros.Add(carro);
            _context.SaveChanges();
            return Created("", carro);
        }
        

        //Read - Listar relação de carros
        [HttpGet]
        [Route("relacaodecarros")]
        public IActionResult List() => Ok(_context.TabelaCarros.Include(Carro => Carro.Pessoa).ToList());


        //Buscar - realizar buscar de carros por Id
        [HttpGet]
        [Route("buscarporcarroid/{id}")]
        public IActionResult buscarporcarroid([FromRoute]int id) {
            Carro carro = _context.TabelaCarros.Find(id);
            
            if(carro == null) {
                return NotFound();
            }

            return Ok(carro);
        }


        //Buscar - realizar buscar de carros pela placa
        [HttpGet]
        [Route("bucasrporplaca/{placa}")]
        public IActionResult bucasrporplaca([FromRoute]string placa) {
            Carro carro = _context.TabelaCarros.Single(carro => carro.Placa == placa);            
            
            if(carro == null) {
                return NotFound();
            }

            return Ok(carro);          
        }


        //Upgrade - Atualizar informações dos carros listados por Id
        [HttpPut]
        [Route("atualizarporcarroid")]
        public IActionResult atualizarporcarroid([FromBody] Carro carro) {

            _context.TabelaCarros.Update(carro);
            _context.SaveChanges();
            return Ok(carro);
        }


        //Delete - Excluir carros por Id
        [HttpDelete]
        [Route("removerporcarroid/{id}")]
        public IActionResult removerporcarroid([FromRoute]int id) {

            Carro carro = _context.TabelaCarros.FirstOrDefault (
                carro => carro.CarroId == id
            );
            
            if (carro == null) {
                return NotFound();
            }
            _context.TabelaCarros.Remove(carro);
            _context.SaveChanges();
            return Ok(carro);
        }


        //Delete - Excluir carros por placa
        [HttpDelete]
        [Route("removerporcarroplaca/{placa}")]
        public IActionResult removerporcarroplaca([FromRoute]string placa) {

            Carro carro = _context.TabelaCarros.FirstOrDefault (
                carro => carro.Placa == placa
            );

            if (carro == null) {
                return NotFound();
            }

            _context.TabelaCarros.Remove(carro);
            _context.SaveChanges();
            return Ok(carro);
            
        }
    }
}