
using System;

namespace API.Models
{
    public class Carro
    {
        public Carro()
        {
            HoraDeEntra = DateTime.Now;
        }
        public string Modelo { get; set; }
        public string Placa { get; set; }
        public string Cor { get; set; }        
        public DateTime HoraDeEntra { get; set; }
    }
}