import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carro } from 'src/app/models/carro';
import { Pessoa } from 'src/app/models/pessoa';
import { CarroService } from 'src/app/services/carro.service';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-cadastrar-carro',
  templateUrl: './cadastrar-carro.component.html',
  styleUrls: ['./cadastrar-carro.component.css']
})
export class CadastrarCarroComponent implements OnInit {

    modelo!: string;
    placa!: string;
    cor!: string;
    pessoas!: Pessoa[];
    pessoaId!: number;


  constructor(private router: Router, private carroService : CarroService, private pessoaService : PessoaService) { }

  ngOnInit(): void {
      this.pessoaService.list().subscribe(pessoas => {
          this.pessoas = pessoas;
        console.table(pessoas);
      })
  }

  casdastrarCarro(): void {
   

    let carro: Carro = {
        modelo: this.modelo,
        placa: this.placa,
        cor: this.cor,
        pessoaId: this.pessoaId
    };
    this.carroService.create(carro).subscribe((carro) => {
        alert('Cadastro realizado com sucesso!!!');
        window.location.reload();
    });

    
}

}
