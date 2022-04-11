import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaseListaPage } from './pase-lista.page';

const routes: Routes = [
  {
    path: '',
    component: PaseListaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaseListaPageRoutingModule {}
