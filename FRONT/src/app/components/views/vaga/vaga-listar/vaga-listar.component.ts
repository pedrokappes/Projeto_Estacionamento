import { Component, OnInit } from '@angular/core';
import { Vaga } from 'src/app/models/vaga';
import { VagaService } from 'src/app/services/vaga.service';

@Component({
  selector: 'app-vaga-listar',
  templateUrl: './vaga-listar.component.html',
  styleUrls: ['./vaga-listar.component.css']
})
export class VagaListarComponent implements OnInit {

    relacaodevaga: Vaga[] = [];
    constructor(private service: VagaService) {}

    ngOnInit(): void {
        this.service.list().subscribe(relacaodevaga => {
            this.relacaodevaga = relacaodevaga;
            for(let vaga of relacaodevaga){
                console.log(vaga);
            }
        });
    }
}
