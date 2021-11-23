import { Vaga } from 'src/app/models/vaga';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VagaService } from 'src/app/services/vaga.service';

@Component({
  selector: 'app-cadastrar-vaga',
  templateUrl: './cadastrar-vaga.component.html',
  styleUrls: ['./cadastrar-vaga.component.css']
})
export class CadastrarVagaComponent implements OnInit {

    status! : boolean;
    tipo! : Int32Array;

  constructor(private router: Router, private service: VagaService) { }

  ngOnInit(): void {
  }

  casdastrarVaga(): void{

    let vaga: Vaga = {

        status: this.status,
        tipo: this.tipo
    };
    
    this.service.create(vaga).subscribe((vaga) => {
        console.log(vaga);
        alert('Cadastro realizado com sucesso!!!');
    });
    
    
}
}
