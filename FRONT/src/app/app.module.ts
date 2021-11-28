import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListarCarroComponent } from './components/views/carro/listar-carro/listar-carro.component';
import { CadastrarCarroComponent } from './components/views/carro/cadastrar-carro/cadastrar-carro.component';
import { PessoaListarComponent } from './components/views/pessoa/pessoa-listar/pessoa-listar.component';
import { VagaListarComponent } from './components/views/vaga/vaga-listar/vaga-listar.component';
import { FormsModule } from '@angular/forms';
import { CadastrarPessoaComponent } from './components/views/pessoa/cadastrar-pessoa/cadastrar-pessoa.component';
import { BuscarPlacaCarroComponent } from './components/views/carro/buscar-placa-carro/buscar-placa-carro.component';
import { AtualizarCarroComponent } from './components/views/carro/atualizar-carro/atualizar-carro.component';
import { BuscarPessoaComponent } from './components/views/pessoa/buscar-pessoa/buscar-pessoa.component';
import { PessoaExcluirComponent } from './components/views/pessoa/pessoa-excluir/pessoa-excluir.component';
import { AtualizarPessoaComponent } from './components/views/pessoa/atualizar-pessoa/atualizar-pessoa.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TemplateComponent } from './components/template/template.component';
//Eu 
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { VagaAtualizarComponent } from './components/views/vaga/vaga-atualizar/vaga-atualizar.component';
import { ListaSaidaComponent } from './components/views/saida/lista-saida/lista-saida.component';
import { SaidaVeiculoComponent } from './components/views/saida/saida-veiculo/saida-veiculo.component';

@NgModule({
    declarations: [
        AppComponent,
        ListarCarroComponent,
        CadastrarCarroComponent,
        PessoaListarComponent,
        CadastrarPessoaComponent,
        VagaListarComponent,
        BuscarPlacaCarroComponent,
        AtualizarCarroComponent,
        BuscarPessoaComponent,
        PessoaExcluirComponent,
        AtualizarPessoaComponent,
        TemplateComponent,
        VagaAtualizarComponent,
        ListaSaidaComponent,
        SaidaVeiculoComponent,

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        //Eu
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatSelectModule

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
