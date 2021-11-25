import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarCarroComponent } from './components/views/carro/cadastrar-carro/cadastrar-carro.component';
import { ListarCarroComponent } from './components/views/carro/listar-carro/listar-carro.component';
import { CadastrarPessoaComponent } from './components/views/pessoa/cadastrar-pessoa/cadastrar-pessoa.component';
import { PessoaListarComponent } from './components/views/pessoa/pessoa-listar/pessoa-listar.component';
import { VagaListarComponent } from './components/views/vaga/vaga-listar/vaga-listar.component';
import { CadastrarVagaComponent } from './components/views/vaga/cadastrar-vaga/cadastrar-vaga.component';
import { BuscarPlacaCarroComponent } from './components/views/carro/buscar-placa-carro/buscar-placa-carro.component';
import { AtualizarCarroComponent } from './components/views/carro/atualizar-carro/atualizar-carro.component';
import { PessoaExcluirComponent } from './components/views/pessoa/pessoa-excluir/pessoa-excluir.component';
import { BuscarPessoaComponent } from './components/views/pessoa/buscar-pessoa/buscar-pessoa.component';
import { AtualizarPessoaComponent } from './components/views/pessoa/atualizar-pessoa/atualizar-pessoa.component';

const routes: Routes = [
    {
        path: "",
        component: CadastrarPessoaComponent,
    },
       {
        path: "pessoa/listar",
        component: PessoaListarComponent,
    },
    {
        path: "carro/listar",
        component: ListarCarroComponent,
    },
    {
        path: "carro/cadastrar",
        component: CadastrarCarroComponent,
    },
    {
        path: "carro/buscar",
        component: BuscarPlacaCarroComponent,
    },
    {
        path: "carro/atualizar",
        component: AtualizarCarroComponent,
    },
    {
        path: "vaga/listar",
        component: VagaListarComponent,
    },
    {
        path: "pessoa/cadastrar",
        component: CadastrarPessoaComponent,
    },
    {
        path: "vaga/cadastrar",
        component: CadastrarVagaComponent,
    },
    {
        path: "pessoa/excluir",
        component: PessoaExcluirComponent
    },
    {
        path: "pessoa/buscar",
        component: BuscarPessoaComponent
    },
    {
        path: "pessoa/atualizar",
        component: AtualizarPessoaComponent
    },{
        path: "pessoa/removercarro",
        component: AtualizarPessoaComponent
    },
    
    
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
