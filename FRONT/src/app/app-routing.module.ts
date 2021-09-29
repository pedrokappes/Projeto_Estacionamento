import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarCarroComponent } from './components/views/carro/cadastrar-carro/cadastrar-carro.component';
import { ListarCarroComponent } from './components/views/carro/listar-carro/listar-carro.component';
import { CadastrarPessoaComponent } from './components/views/pessoa/cadastrar-pessoa/cadastrar-pessoa.component';
import { PessoaListarComponent } from './components/views/pessoa/pessoa-listar/pessoa-listar.component';
import { VagaListarComponent } from './components/views/vaga/vaga-listar/vaga-listar.component';

const routes: Routes = [
    // {
    //     path: "",
    //     component: VagaListarComponent,
    // },
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
    // {
    //     path: "carro/consultar",
    //     component: BuscarPlacaCarroComponent,
    // },
    {
        path: "vagalistar",
        component: VagaListarComponent,
    },
    {
        path: "pessoa/cadastrar",
        component: CadastrarPessoaComponent,
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
