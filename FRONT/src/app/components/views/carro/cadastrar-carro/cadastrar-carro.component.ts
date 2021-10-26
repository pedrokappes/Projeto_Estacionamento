import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carro } from 'src/app/models/carro';
import { CarroService } from 'src/app/services/carro.service';

@Component({
  selector: 'app-cadastrar-carro',
  templateUrl: './cadastrar-carro.component.html',
  styleUrls: ['./cadastrar-carro.component.css']
})
export class CadastrarCarroComponent implements OnInit {

    modelo!: string;
    placa!: string;
    cor!: string;
    pessoaid!: number;


  constructor(private router: Router, private service : CarroService) { }

  ngOnInit(): void {}

  casdastrarCarro(): void {
   

    let carro: Carro = {
        modelo: this.modelo,
        placa: this.placa,
        cor: this.cor,
        pessoaId: this.pessoaid        
    };
    this.service.create(carro).subscribe((carro) => {
        console.log(carro);
        alert('Cadastro realizado com sucesso!!!');
    });

    
}

}
