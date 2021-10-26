using System;
using System.Collections.Generic;
using System.Linq;
using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{

    [ApiController]
    [Route("api/carro")]
    public class CarroController : ControllerBase
    {

        private readonly Banco _context;

        public CarroController(Banco context)
        {
            _context = context;

            pessoa_zero();
            carro_zero();
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
        public void carro_zero()
        {
            Carro validacao = _context.TabelaCarros.Find(1);
            if (validacao == null)
            {
                Carro carro_zero = new Carro
                {
                    Modelo = null,
                    Placa = null,
                    Cor = null,
                    PessoaId = 1
                };

                _context.TabelaCarros.Add(carro_zero);
                _context.SaveChanges();
            }
        }

        //Create - Adicionar entrada de Carros
        [HttpPost]
        [Route("entradadecarro")]
        public IActionResult Create([FromBody] Carro carro)
        {
            carro.Pessoa = _context.TabelaPessoas.Find(carro.PessoaId);
            _context.TabelaCarros.Add(carro);
            _context.SaveChanges();
            return Created("", carro);
        }


        //Read - Listar relação de carros
        [HttpGet]
        [Route("relacaodecarros")]
        public IActionResult List() =>

        Ok(lista(_context));


        public List<Carro> lista(Banco _context)
        {
            List<Carro> lista = _context.TabelaCarros
            .Include(carro => carro.Pessoa)
            .ToList();
            lista.RemoveAt(0);
            return lista;
        }

        //Buscar - realizar buscar de carros por Id
        [HttpGet]
        [Route("buscarporcarroid/{id}")]
        public IActionResult buscarporcarroid([FromRoute] int id)
        {
            Carro carro = _context.TabelaCarros.Find(id);

            if (carro == null)
            {
                return NotFound();
            }

            return Ok(carro);
        }


        //Buscar - realizar buscar de carros pela placa
        [HttpGet]
        [Route("bucasrporplaca/{placa}")]
        public IActionResult bucasrporplaca([FromRoute] string placa)
        {
            Carro carro = _context.TabelaCarros.Single(carro => carro.Placa == placa);

            if (carro == null)
            {
                return NotFound();
            }

            return Ok(carro);
        }


        //Upgrade - Atualizar informações dos carros listados por Id
        [HttpPut]
        [Route("atualizarporcarroid")]
        public IActionResult atualizarporcarroid([FromBody] Carro carro)
        {

            _context.TabelaCarros.Update(carro);
            _context.SaveChanges();
            return Ok(carro);
        }


        //Delete - Excluir carros por Id
        [HttpDelete]
        [Route("removerporcarroid/{id}")]
        public IActionResult removerporcarroid([FromRoute] int id)
        {

            Carro carro = _context.TabelaCarros.FirstOrDefault(
                carro => carro.CarroId == id
            );

            if (carro == null)
            {
                return NotFound();
            }
            _context.TabelaCarros.Remove(carro);
            _context.SaveChanges();
            return Ok(carro);
        }


        //Delete - Excluir carros por placa
        [HttpDelete]
        [Route("removerporcarroplaca/{placa}")]
        public IActionResult removerporcarroplaca([FromRoute] string placa)
        {

            Carro carro = _context.TabelaCarros.FirstOrDefault(
                carro => carro.Placa == placa
            );

            if (carro == null)
            {
                return NotFound();
            }

            _context.TabelaCarros.Remove(carro);
            _context.SaveChanges();
            return Ok(carro);

        }
    }
}