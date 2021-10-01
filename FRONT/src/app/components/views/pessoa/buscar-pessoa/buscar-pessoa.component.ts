import { Pessoa } from './../../../../models/pessoa';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-buscar-pessoa',
  templateUrl: './buscar-pessoa.component.html',
  styleUrls: ['./buscar-pessoa.component.css']
})
export class BuscarPessoaComponent implements OnInit {

    pessoaBuscada! : Pessoa;
    cpf! : string;
    constructor(private router: Router, private service : PessoaService) { }

  ngOnInit(): void {
  }

  buscar(): void {
    this.service.buscar(this.cpf).subscribe(pessoa => {
        this.pessoaBuscada = pessoa;    
    });
  }
}
