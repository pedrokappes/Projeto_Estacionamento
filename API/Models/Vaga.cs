using System;

namespace API.Models
{
    public class Vaga
    {
        public int VagaId { get; set; }
        public string Status { get; set; } 
        public int CarroId { get; set; }  
        public Carro Carro { get; set; }   
    }
}