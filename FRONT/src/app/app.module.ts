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
import { CadastrarVagaComponent } from './components/views/vaga/cadastrar-vaga/cadastrar-vaga.component';
import { BuscarPlacaCarroComponent } from './components/views/carro/buscar-placa-carro/buscar-placa-carro.component';
import { ExcluirCarroIDComponent } from './components/views/carro/excluir-carro-id/excluir-carro-id.component';
import { AtualizarCarroComponent } from './components/views/carro/atualizar-carro/atualizar-carro.component';

@NgModule({
    declarations: [
        AppComponent,
        ListarCarroComponent,
        CadastrarCarroComponent,
        PessoaListarComponent,
        CadastrarPessoaComponent,
        VagaListarComponent,
        CadastrarVagaComponent,
        BuscarPlacaCarroComponent,
        ExcluirCarroIDComponent,
        AtualizarCarroComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
