import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carro } from 'src/app/models/carro';
import { CarroService } from 'src/app/services/carro.service';

@Component({
  selector: 'app-buscar-placa-carro',
  templateUrl: './buscar-placa-carro.component.html',
  styleUrls: ['./buscar-placa-carro.component.css']
})
export class BuscarPlacaCarroComponent implements OnInit {

    carroBuscado! : Carro;
    placa! : string;
  constructor(private router: Router, private service : CarroService) { }

  ngOnInit(): void {
  }

  buscar(): void {
    this.service.buscar(this.placa).subscribe(carro => {
        this.carroBuscado = carro;    
    });
}
  

}
