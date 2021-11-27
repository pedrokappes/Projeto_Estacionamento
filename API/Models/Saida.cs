using System;

namespace API.Models
{
    public class Saida
    {
        public Saida()
        {
            HoraSaida = DateTime.Now;
        }
        public int SaidaId { get; set; }
        public int PessoaId { get; set; }  
        public Pessoa Pessoa { get; set; }  
        public int CarroId { get; set; } 
        public Carro Carro { get; set; }  
        public DateTime HoraEntrada { get; set; } 
        public DateTime HoraSaida { get; set; } 
         
    }
}