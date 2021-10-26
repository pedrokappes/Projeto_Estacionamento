using System;

namespace API.Models
{
    public class Vaga
    {
        public int VagaId { get; set; }
        public String Status { get; set; }
        public String Tipo  { get; set; }   
        public Carro Carro { get; set; }
        public int CarroId { get; set; }
    }
}