import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pessoa } from 'src/app/models/pessoa';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-pessoa-excluir',
  templateUrl: './pessoa-excluir.component.html',
  styleUrls: ['./pessoa-excluir.component.css']
})
export class PessoaExcluirComponent implements OnInit {

    nome! : string;
    cpf! : string;
    telefone! : string;

    constructor(private router: Router, private service: PessoaService ) { }
    
    ngOnInit(): void {
    }





}
