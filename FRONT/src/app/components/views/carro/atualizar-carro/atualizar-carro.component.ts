import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carro } from 'src/app/models/carro';
import { CarroService } from 'src/app/services/carro.service';

@Component({
  selector: 'app-atualizar-carro',
  templateUrl: './atualizar-carro.component.html',
  styleUrls: ['./atualizar-carro.component.css']
})
export class AtualizarCarroComponent implements OnInit {
    
    carroId!: number;
    modelo!: string;
    placa!: string;
    cor!: string;
    carros!: Carro[];
    
  constructor(private router: Router, private service : CarroService,private carroService: CarroService) { }

  ngOnInit(): void {
    this.carroService.list().subscribe(carros => {
        this.carros = carros;
    })
  }

  atualizarCarro(): void {
   
    let carro: Carro = {
        carroId: this.carroId,
        modelo: this.modelo,
        placa: this.placa,
        cor: this.cor,
        pessoaId! : 1,
    };
    this.service.atualizar(carro).subscribe();
    console.log(carro);
    
}

}
