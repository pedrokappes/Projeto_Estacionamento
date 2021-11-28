import { SaidaService } from './../../../../services/saidaservice';
import { Component, OnInit } from '@angular/core';
import { Saida } from 'src/app/models/saida';

@Component({
  selector: 'app-lista-saida',
  templateUrl: './lista-saida.component.html',
  styleUrls: ['./lista-saida.component.css']
})
export class ListaSaidaComponent implements OnInit {

    listasaidas: Saida[] = [];
    colunasExibidas : String[] = ["saidaId","pessoaId","placa", "horaEntrada","horaSaida","dinheiro"];


  constructor(private service : SaidaService) { }

  ngOnInit(): void {
        this.service.list().subscribe(listasaidas => {
            this.listasaidas = listasaidas;
            for(let saida of listasaidas){
                console.log(saida);
            }
        });
    }


}
