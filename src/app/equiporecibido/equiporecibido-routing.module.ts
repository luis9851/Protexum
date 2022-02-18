import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquiporecibidoPage } from './equiporecibido.page';

const routes: Routes = [
  {
    path: '',
    component: EquiporecibidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EquiporecibidoPageRoutingModule {}
