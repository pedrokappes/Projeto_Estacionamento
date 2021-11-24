using System.Collections.Generic;
using System.Linq;
using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers {

    [ApiController]
    [Route("api/pessoa")]

    public class PessoaController : ControllerBase {
        
        private readonly Banco _context;

        public PessoaController(Banco context) {
            _context = context;
        }


        //Create - Adicionar uma nova pessoa
        [HttpPost]
        [Route("novapessoa")]
        public IActionResult novapessoa([FromBody] Pessoa pessoa) {

            _context.TabelaPessoas.Add(pessoa);
            _context.SaveChanges();
            return Created("", pessoa);
        }


        //Read - Listar relação de pessoas
        [HttpGet]
        [Route("listapessoas")]
        public IActionResult List() => Ok(_context.TabelaPessoas.ToList());

        //Buscar - realizar buscar de pessoas pelo cpf
        [HttpGet]
        [Route("buscarcpf/{cpf}")]
        public IActionResult buscarcpf([FromRoute]string cpf) {
            Pessoa pessoa = _context.TabelaPessoas.Single(pessoa => pessoa.Cpf == cpf);
            
            if(pessoa == null) {
                return NotFound();
            }

            return Ok(pessoa);          
        }
        

        //Upgrade - Atualizar informações das pessoa id
        [HttpPut]
        [Route("atualizarpessoa")]
        public IActionResult atualizarpessoa([FromBody] Pessoa pessoa) {

            _context.TabelaPessoas.Update(pessoa);
            _context.SaveChanges();
            return Ok(pessoa);
        }

        //Delete - Excluir pessoa por CPF
        [HttpDelete]
        [Route("removerpessoacpf/{cpf}")]
        public IActionResult removerpessoacpf ([FromRoute]string cpf) {
            
            Pessoa pessoa = _context.TabelaPessoas.FirstOrDefault (
                pessoa => pessoa.Cpf == cpf
            );

            if (pessoa == null) {
                return NotFound();
            }
            _context.TabelaPessoas.Remove(pessoa);
            _context.SaveChanges();
            return Ok(pessoa);
        }
    }
}