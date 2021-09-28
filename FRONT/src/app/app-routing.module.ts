import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarCarroComponent } from './components/views/carro/listar-carro/listar-carro.component';
import { PessoaListarComponent } from './components/views/pessoa/pessoa-listar/pessoa-listar.component';
import { VagaListarComponent } from './components/views/vaga/vaga-listar/varga-listar.component';

const routes: Routes = [
    {
        path: "",
        component: VagaListarComponent,
    },
    {
        path: "pessoaListar",
        component: PessoaListarComponent,
    },
    {
        path: "carro/listar",
        component: ListarCarroComponent,
    },
    {
        path: "vagalistar",
        component: VagaListarComponent,
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
