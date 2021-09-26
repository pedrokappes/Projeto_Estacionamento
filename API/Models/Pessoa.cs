using System;

namespace API.Models
{
    public class Pessoa
    {
        public Pessoa(){
            HoraDeCriacao = DateTime.Now;    
        }

        public int PessoaId { get; set; }
        public string Nome { get; set; }
        public string Cpf { get; set; }
        public string Telefone { get; set; }
        public DateTime HoraDeCriacao { get; set; }

    }
}