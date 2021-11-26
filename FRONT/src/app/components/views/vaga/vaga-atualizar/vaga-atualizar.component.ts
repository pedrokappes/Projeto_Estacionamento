import { Carro } from 'src/app/models/carro';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vaga } from 'src/app/models/vaga';
import { VagaService } from 'src/app/services/vaga.service';
import { CarroService } from 'src/app/services/carro.service';

@Component({
    selector: 'app-vaga-atualizar',
    templateUrl: './vaga-atualizar.component.html',
    styleUrls: ['./vaga-atualizar.component.css']
})
export class VagaAtualizarComponent implements OnInit {

    vagaId!: number;
    status!: string;
    carros!: Carro[];
    carroId!: number;

    vagalista!: Vaga[];

    constructor(private router: Router, private service: VagaService, private carroService: CarroService) { }

    ngOnInit(): void {
        this.carroService.list().subscribe(carros => {
            this.carros = carros;
        })

        this.service.list().subscribe(vagalista => {
            this.vagalista = vagalista;
        })
    }

    atualizarVaga(): void {

        let vaga: Vaga = {
            vagaId: this.vagaId,
            status: this.status,
            carroId: this.carroId
        };
        this.service.atualizar(vaga).subscribe();
        alert('Vaga atualizada com sucesso!!!');
        window.location.reload();

    }

}
