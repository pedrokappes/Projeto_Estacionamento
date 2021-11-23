import { VagaService } from 'src/app/services/vaga.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-excluir-vaga',
  templateUrl: './excluir-vaga.component.html',
  styleUrls: ['./excluir-vaga.component.css']
})
export class ExcluirVagaComponent implements OnInit {

    vagaId! : Int32Array;

    constructor(private router: Router, private service : VagaService) { }

    ngOnInit(): void {
    }

    excluir(): void {
        this.service.excluir(this.vagaId).subscribe();
        alert("Item deletado");
    }

}
