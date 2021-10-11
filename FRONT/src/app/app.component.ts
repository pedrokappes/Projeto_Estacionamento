import { PessoaService } from './services/pessoa.service';
import { Pessoa } from './models/pessoa';
import { Component, OnInit } from '@angular/core';
import { Carro } from './models/carro';
import { CarroService } from './services/carro.service';
import { Vaga } from './models/vaga';
import { VagaService } from './services/vaga.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    styles: []
})

export class AppComponent {}