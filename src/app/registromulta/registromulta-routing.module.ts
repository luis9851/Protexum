import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistromultaPage } from './registromulta.page';

const routes: Routes = [
  {
    path: '',
    component: RegistromultaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistromultaPageRoutingModule {}
