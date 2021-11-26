import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/models/pessoa';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
    selector: 'app-pessoa-listar',
    templateUrl: './pessoa-listar.component.html',
    styleUrls: ['./pessoa-listar.component.css']
})
export class PessoaListarComponent implements OnInit {

    listapessoas: Pessoa[] = [];
    colunasExibidas: String[] = ["pessoaId", "nome", "cpf", "telefone","deletar"];

   

    constructor(private service: PessoaService) { }

    ngOnInit(): void {
        this.service.list().subscribe(listapessoas => {
            this.listapessoas = listapessoas;
            for (let pessoa of listapessoas) {
                console.log(pessoa);
            }
        });
    }

    excluir(deletar : string): void {
    this.service.excluir(deletar).subscribe();
    alert('Cliente excluido com sucesso!!!');
    window.location.reload();
    }



}
