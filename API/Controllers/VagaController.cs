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
    [Route("api/vaga")]

    public class VagaController : ControllerBase
    {

        private readonly Banco _context;

        public VagaController(Banco context)
        {
            _context = context;
            pessoa_zero();
            carro_zero();
            cadastrar();
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

        public void cadastrar()
        {


            Vaga validacao = _context.TabelaVagas.Find(1);
            if (validacao == null)
            {
                Vaga vaga = new Vaga
                {
                    VagaId = 0,
                    Status = "Livre",
                    Tipo = "Moto",
                    CarroId = 1,
                };

                for (int i = 0; i < 5; i++)
                {
                    vaga.VagaId = i + 1;
                    _context.TabelaVagas.Add(vaga);
                    _context.SaveChanges();
                }

                vaga.Tipo = "Carro";

                for (int i = 5; i < 15; i++)
                {
                    vaga.VagaId = i + 1;
                    _context.TabelaVagas.Add(vaga);
                    _context.SaveChanges();
                }
            }
        }

        //Read - Listar relação de vaga
        [HttpGet]
        [Route("relacaodevagas")]
        public IActionResult List() => Ok(
            _context.TabelaVagas
            .Include(vaga => vaga.Carro)
            .ToList());


        //Buscar - realizar buscar de vaga por ID
        [HttpGet]
        [Route("buscarporvagaid/{id}")]
        public IActionResult buscarporvagaid([FromRoute] int id)
        {
            Vaga vaga = _context.TabelaVagas.Find(id);

            if (vaga == null)
            {
                return NotFound();
            }

            return Ok(vaga);
        }


        //Upgrade - Atualizar informações dos carros listados por ID
        [HttpPut]
        [Route("atualizarporvagaid")]
        public IActionResult atualizarporvagaid([FromBody] Vaga vaga)
        {
            vaga.Carro = _context.TabelaCarros.Find(vaga.CarroId);
            _context.TabelaVagas.Update(vaga);
            _context.SaveChanges();
            return Ok(vaga);
        }

    }
}

