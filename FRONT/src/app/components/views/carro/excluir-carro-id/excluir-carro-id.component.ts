import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carro } from 'src/app/models/carro';
import { CarroService } from 'src/app/services/carro.service';

@Component({
  selector: 'app-excluir-carro-id',
  templateUrl: './excluir-carro-id.component.html',
  styleUrls: ['./excluir-carro-id.component.css']
})
export class ExcluirCarroIDComponent implements OnInit {

    placa! : string;
  constructor(private router: Router, private service : CarroService) { }

  ngOnInit(): void {
  }

  excluir(): void {
    this.service.excluir(this.placa).subscribe();
    }
}
