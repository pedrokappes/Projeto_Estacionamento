using System;

namespace API.Models
{
    public class Carro
    {
          public Carro()
        {
            HoraEntrada = DateTime.Now;
        }
        public int CarroId { get; set; }
        public string Modelo { get; set; }
        public string Placa { get; set; }
        public string Cor { get; set; }        
        public int PessoaId { get; set; }
        public Pessoa Pessoa { get; set; }     
        public DateTime HoraEntrada { get; set;}
    }
}