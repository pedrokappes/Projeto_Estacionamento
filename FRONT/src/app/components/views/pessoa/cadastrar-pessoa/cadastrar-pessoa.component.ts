import { Vaga } from './../../../../models/vaga';
import { Pessoa } from 'src/app/models/pessoa';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PessoaService } from 'src/app/services/pessoa.service';
import { VagaService } from 'src/app/services/vaga.service';

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
        alert('Cadastro realizado com sucesso!!!');
        window.location.reload();
    });
    
    
}
}
