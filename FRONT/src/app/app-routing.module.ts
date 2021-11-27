import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarCarroComponent } from './components/views/carro/cadastrar-carro/cadastrar-carro.component';
import { ListarCarroComponent } from './components/views/carro/listar-carro/listar-carro.component';
import { CadastrarPessoaComponent } from './components/views/pessoa/cadastrar-pessoa/cadastrar-pessoa.component';
import { PessoaListarComponent } from './components/views/pessoa/pessoa-listar/pessoa-listar.component';
import { VagaListarComponent } from './components/views/vaga/vaga-listar/vaga-listar.component';
import { BuscarPlacaCarroComponent } from './components/views/carro/buscar-placa-carro/buscar-placa-carro.component';
import { AtualizarCarroComponent } from './components/views/carro/atualizar-carro/atualizar-carro.component';
import { PessoaExcluirComponent } from './components/views/pessoa/pessoa-excluir/pessoa-excluir.component';
import { BuscarPessoaComponent } from './components/views/pessoa/buscar-pessoa/buscar-pessoa.component';
import { AtualizarPessoaComponent } from './components/views/pessoa/atualizar-pessoa/atualizar-pessoa.component';
import { VagaAtualizarComponent } from './components/views/vaga/vaga-atualizar/vaga-atualizar.component';
import { ListaSaidaComponent } from './components/views/saida/lista-saida/lista-saida.component';
import { SaidaVeiculoComponent } from './components/views/saida/saida-veiculo/saida-veiculo.component';
import { PessoaComponent } from './components/funcoes/pessoa/pessoa.component';
import { CarroComponent } from './components/funcoes/carro/carro.component';
import { VagaComponent } from './components/funcoes/vaga/vaga.component';


const routes: Routes = [
    {
        path: "",
        component: CadastrarPessoaComponent,
    },
    {
        path: "index/pessoa",
        component: PessoaComponent,
    },
    {
        path: "index/carro",
        component: CarroComponent,
    },
    {
        path: "index/vaga",
        component: VagaComponent
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
    },
    {
        path: "pessoa/removercarro",
        component: AtualizarPessoaComponent
    },
    {
        path: "vaga/atualizar",
        component: VagaAtualizarComponent
    },
    {
        path: "saida/lista",
        component: ListaSaidaComponent
    },
    {
        path: "saida/saida",
        component: SaidaVeiculoComponent
    },
    
    
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
