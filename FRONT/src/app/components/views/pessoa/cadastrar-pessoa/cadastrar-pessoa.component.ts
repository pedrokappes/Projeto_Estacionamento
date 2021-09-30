import { Pessoa } from 'src/app/models/pessoa';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-cadastrar-pessoa',
  templateUrl: './cadastrar-pessoa.component.html',
  styleUrls: ['./cadastrar-pessoa.component.css']
})
export class CadastrarPessoaComponent implements OnInit {

    nome! : string;
    cpf! : string;
    telefone! : string;

  constructor(private router: Router, private service: PessoaService) { }

  ngOnInit(): void {
  }

  casdastrarCliente(): void{

    let pessoa: Pessoa = {

        nome: this.nome,
        cpf: this.cpf,
        telefone: this.telefone
    
    };
    
    this.service.create(pessoa).subscribe((pessoa) => {
        console.log(pessoa);
        alert('Cadastro realizado com sucesso!!!');
        this.router.navigate(["produto/listar"]);
    });
    
    
}
}
