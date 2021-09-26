import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/models/pessoa';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-pessoa-listar',
  templateUrl: './pessoa-listar.component.html',
  styleUrls: ['./pessoa-listar.component.css']
})
export class PessoaListarComponent implements OnInit {

    relacaodepessoa: Pessoa[] = [];
    constructor(private service: PessoaService) {}
    
    ngOnInit(): void {
        this.service.list().subscribe(relacaodepessoa => {
            this.relacaodepessoa = relacaodepessoa;
            for(let pessoa of relacaodepessoa){
                console.log(pessoa);
            }
        });
    }
}
