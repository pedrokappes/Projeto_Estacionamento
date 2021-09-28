using System.Collections.Generic;
using System.Linq;
using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/pessoa")]

    public class PessoaController : ControllerBase
    {
        private readonly Banco _context;

        public PessoaController(Banco context){
            _context = context;
        }

        //Create - Adicionar uma nova pessoa
        [HttpPost]
        [Route("novapessoa")]
        public Pessoa NovaPessoa (Pessoa pessoa){
            _context.TabelaPessoas.Add(pessoa);
            _context.SaveChanges();
            return pessoa;
        }

        //Read - Listar relação de pessoas
        [HttpGet]
        [Route("relacaodepessoas")]
        public List<Pessoa> relacaodepessoas(){
            return (_context.TabelaPessoas.ToList());
        }

        //Buscar - realizar buscar de pessoas por ID
        [HttpGet]
        [Route("buscarporpessoaid/{id}")]
        public IActionResult buscarporpessoaid([FromRoute]int id)
        {
            Pessoa pessoa = _context.TabelaPessoas.Find(id);
            return Ok(pessoa);
        }

        //Buscar - realizar buscar de pessoas pelo cpf
        [HttpGet]
        [Route("bucasrporcpf/{cpf}")]
        public IActionResult bucasrporcpf([FromRoute]string cpf)
        {
            Pessoa pessoa = _context.TabelaPessoas.Single(pessoa => pessoa.Cpf == cpf);
            return Ok(pessoa);          
        }
        
        //Upgrade - Atualizar informações dos carros listados por ID
        [HttpPut]
        [Route("atualizarporpessoaid")]
        public IActionResult atualizarporpessoaid([FromBody] Pessoa pessoa)
        {
            _context.TabelaPessoas.Update(pessoa);
            _context.SaveChanges();
            return Ok(pessoa);
        }

        //Delete - Excluir pessoas por ID
        [HttpDelete]
        [Route("removerporpessoaid/{id}")]
        public IActionResult removerporpessoaid ([FromRoute]int id)
        {
            Pessoa pessoa = _context.TabelaPessoas.FirstOrDefault
            (
                pessoa => pessoa.PessoaId == id
            );
            _context.TabelaPessoas.Remove(pessoa);
            _context.SaveChanges();
            return Ok(pessoa);
        }

        //Delete - Excluir pessoa por CPF
        [HttpDelete]
        [Route("removerporpessoacpf/{cpf}")]
        public IActionResult removerporpessoacpf ([FromRoute]string cpf)
        {
            Pessoa pessoa = _context.TabelaPessoas.FirstOrDefault
            (
                pessoa => pessoa.Cpf == cpf
            );
            _context.TabelaPessoas.Remove(pessoa);
            _context.SaveChanges();
            return Ok(pessoa);
        }
    }
}