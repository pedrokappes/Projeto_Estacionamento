import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vaga } from 'src/app/models/vaga';
import { VagaService } from 'src/app/services/vaga.service';

@Component({
  selector: 'app-vaga-atualizar',
  templateUrl: './vaga-atualizar.component.html',
  styleUrls: ['./vaga-atualizar.component.css']
})
export class VagaAtualizarComponent implements OnInit {

    vagaId!: number;
    status!: string;


  constructor(private router: Router, private service : VagaService) { }

  ngOnInit(): void {
  }

  atualizarVaga(): void {
   
    let vaga: Vaga = {
        vagaId: this.vagaId,
        status: this.status
    };
    this.service.atualizar(vaga).subscribe();
    console.log(vaga);
    

}

}
