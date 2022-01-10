import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaElementosPage } from './lista-elementos.page';

const routes: Routes = [
  {
    path: '',
    component: ListaElementosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaElementosPageRoutingModule {}
