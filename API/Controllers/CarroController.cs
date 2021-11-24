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
        [Route("cadastrarcarro")]
        public IActionResult cadastrarcarro([FromBody] Carro carro) {
            int pessoaId = carro.PessoaId;
            carro.Pessoa = _context.TabelaPessoas.Find(pessoaId);
            _context.TabelaCarros.Add(carro);
            _context.SaveChanges();
            return Created("", carro);
        }
        

        //Read - Listar relação de carros
        [HttpGet]
        [Route("listacarros")]
        public IActionResult List() => Ok(_context.TabelaCarros.Include(Carro => Carro.Pessoa).ToList());

        //Buscar - realizar buscar de carros pela placa
        [HttpGet]
        [Route("buscarplaca/{placa}")]
        public IActionResult buscarplaca([FromRoute]string placa) {
            Carro carro = _context.TabelaCarros.Single(carro => carro.Placa == placa);            
            
            if(carro == null) {
                return NotFound();
            }

            return Ok(carro);          
        }


        //Upgrade - Atualizar informações dos carros 
        [HttpPut]
        [Route("atualizarcarro")]
        public IActionResult atualizarcarro([FromBody] Carro carro) {

            _context.TabelaCarros.Update(carro);
            _context.SaveChanges();
            return Ok(carro);
        }

        //Delete - Excluir carros por placa
        [HttpDelete]
        [Route("removercarro/{placa}")]
        public IActionResult removercarro([FromRoute]string placa) {

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