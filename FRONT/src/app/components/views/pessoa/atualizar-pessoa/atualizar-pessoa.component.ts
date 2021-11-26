import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pessoa } from 'src/app/models/pessoa';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-atualizar-pessoa',
  templateUrl: './atualizar-pessoa.component.html',
  styleUrls: ['./atualizar-pessoa.component.css']
})
export class AtualizarPessoaComponent implements OnInit {

    pessoaId!: number;
    nome!: string;
    cpf!: string;
    telefone!: string;
    pessoas!: Pessoa[];

  constructor(private router: Router, private service : PessoaService ) { }

  ngOnInit(): void {
    this. service.list().subscribe(pessoas => {
        this.pessoas = pessoas;
    }) 
  }

  atualizarCliente(): void {
   
    let pessoa: Pessoa = {
        pessoaId: this.pessoaId,
        nome: this.nome,
        cpf: this.cpf,
        telefone: this.telefone
    };
    this.service.atualizar(pessoa).subscribe();
    alert('Cliente atualizado com sucesso!!!');
    window.location.reload();
    

}
}