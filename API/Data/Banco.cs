using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class Banco :  DbContext
    {
        public Banco(DbContextOptions<Banco> options) : base(options){}

        public DbSet<Pessoa> TabelaPessoas { get; set; }
        public DbSet<Carro> TabelaCarros { get; set; }       
        public DbSet<Vaga> TabelaVagas { get; set; }
        public DbSet<Saida> TabelaSaidas { get; set; }
    }
}