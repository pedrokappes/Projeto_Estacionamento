import { VagaService } from 'src/app/services/vaga.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vaga } from 'src/app/models/vaga';

@Component({
    selector: 'app-buscar-vaga',
    templateUrl: './buscar-vaga.component.html',
    styleUrls: ['./buscar-vaga.component.css']
})
export class BuscarVagaComponent implements OnInit {

    vagaBuscada! : Vaga;
    vagaId! : number;

    constructor(private router: Router, private service : VagaService) { }

    ngOnInit(): void {
    }

    buscar(): void {
        this.service.buscar(this.vagaId).subscribe(vaga => {
            this.vagaBuscada = vaga;
        });
    }

}
