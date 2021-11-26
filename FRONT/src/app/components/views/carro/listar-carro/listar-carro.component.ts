import { Component, OnInit } from '@angular/core';
import { Carro } from 'src/app/models/carro';
import { CarroService } from 'src/app/services/carro.service';

@Component({
  selector: 'app-listar-carro',
  templateUrl: './listar-carro.component.html',
  styleUrls: ['./listar-carro.component.css']
})
export class ListarCarroComponent implements OnInit {

    listacarros: Carro[] = [];
    colunasExibidas : String[] = ["carroId","modelo","placa","cor","pessoa", "deletar"];

    constructor(private service: CarroService) {}
    
    ngOnInit(): void {
        this.service.list().subscribe(listacarros => {
            this.listacarros = listacarros;
            for(let carro of listacarros){
                console.log(carro);
            }
        });
    }

    excluir(deletar : string): void {
        this.service.excluir(deletar).subscribe();
        alert('Carro excluido com sucesso!!!');
        window.location.reload();
        }
}
