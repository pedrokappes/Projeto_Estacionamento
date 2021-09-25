import { Component, OnInit } from '@angular/core';
import { Carro } from './models/carro';
import { CarroService } from './services/carro.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    //css alterar para stylesurl quando for criado uma pagina exclusiva
    styles: []
})

export class AppComponent implements OnInit {
    relacaodecarros: Carro[] = []
    constructor(private service: CarroService) {}

    ngOnInit(): void {
        this.service.list().subscribe((relacaodecarros) => {
            this.relacaodecarros = relacaodecarros;
            for(let carro of relacaodecarros){
                console.log(carro);
            }
        });
    }


}
