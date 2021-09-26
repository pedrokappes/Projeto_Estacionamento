using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class Banco :  DbContext
    {
        public Banco(DbContextOptions<Banco> options) : base(options){}

        public DbSet<Carro> TabelaCarros { get; set; }
        public DbSet<Pessoa> TabelaPessoa { get; set; }
    }
}