import { SaidaService } from './../../../../services/saidaservice';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarroService } from 'src/app/services/carro.service';
import { PessoaService } from 'src/app/services/pessoa.service';
import { Carro } from 'src/app/models/carro';
import { Pessoa } from 'src/app/models/pessoa';
import { Saida } from 'src/app/models/saida';

@Component({
  selector: 'app-saida-veiculo',
  templateUrl: './saida-veiculo.component.html',
  styleUrls: ['./saida-veiculo.component.css']
})
export class SaidaVeiculoComponent implements OnInit {

    pessoaId!: number;
    carroId!: number;
    carros!: Carro[];
    pessoas!: Pessoa[];

    saida! : Saida[];

  constructor(private router: Router, private service: SaidaService, private pessoaService: PessoaService, private carroService: CarroService) { }


  ngOnInit(): void {
    this.carroService.list().subscribe(carros => {
        this.carros = carros;
    })

    this.pessoaService.list().subscribe(pessoas => {
        this.pessoas = pessoas;
    })
}

// atualizarVaga(): void {

//     let Saida: Saida = {
//         pessoaId : this.pessoaId,
//         carroId : this.carroId,
//     };
//     this.service.saida(saida).subscribe();
//     alert('Saida de veiculo com sucesso!!!');
//     window.location.reload();

// }


}
