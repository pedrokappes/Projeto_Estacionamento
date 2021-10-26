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

        public PessoaController(Banco context)
        {
            _context = context;
            pessoa_zero();
        }


        public void pessoa_zero()
        {
            Pessoa validacao = _context.TabelaPessoas.Find(1);
            if (validacao == null)
            {
                Pessoa pessoa_zero = new Pessoa
                {
                    Nome = null,
                    Cpf = null,
                    Telefone = null
                };

                _context.TabelaPessoas.Add(pessoa_zero);
                _context.SaveChanges();
            }

        }

        //Create - Adicionar uma nova pessoa
        [HttpPost]
        [Route("novapessoa")]
        public IActionResult Create([FromBody] Pessoa pessoa)
        {

            _context.TabelaPessoas.Add(pessoa);
            _context.SaveChanges();
            return Created("", pessoa);
        }


        //Read - Listar relação de pessoas
        [HttpGet]
        [Route("relacaodepessoas")]
        public IActionResult List() => Ok(lista(_context));

        public List<Pessoa> lista(Banco _context)
        {
            List<Pessoa> lista = _context.TabelaPessoas
            .ToList();
            lista.RemoveAt(0);
            return lista;
        }

        //Buscar - realizar buscar de pessoas por ID
        [HttpGet]
        [Route("buscarporpessoaid/{id}")]
        public IActionResult buscarporpessoaid([FromRoute] int id)
        {
            Pessoa pessoa = _context.TabelaPessoas.Find(id);

            if (pessoa == null)
            {
                return NotFound();
            }

            return Ok(pessoa);
        }


        //Buscar - realizar buscar de pessoas pelo cpf
        [HttpGet]
        [Route("bucasrporcpf/{cpf}")]
        public IActionResult bucasrporcpf([FromRoute] string cpf)
        {
            Pessoa pessoa = _context.TabelaPessoas.Single(pessoa => pessoa.Cpf == cpf);

            if (pessoa == null)
            {
                return NotFound();
            }

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
        public IActionResult removerporpessoaid([FromRoute] int id)
        {

            Pessoa pessoa = _context.TabelaPessoas.FirstOrDefault(
                pessoa => pessoa.PessoaId == id
            );

            if (pessoa == null)
            {
                return NotFound();
            }
            _context.TabelaPessoas.Remove(pessoa);
            _context.SaveChanges();
            return Ok(pessoa);
        }


        //Delete - Excluir pessoa por CPF
        [HttpDelete]
        [Route("removerporpessoacpf/{cpf}")]
        public IActionResult removerporpessoacpf([FromRoute] string cpf)
        {

            Pessoa pessoa = _context.TabelaPessoas.FirstOrDefault(
                pessoa => pessoa.Cpf == cpf
            );

            if (pessoa == null)
            {
                return NotFound();
            }
            _context.TabelaPessoas.Remove(pessoa);
            _context.SaveChanges();
            return Ok(pessoa);
        }
    }
}