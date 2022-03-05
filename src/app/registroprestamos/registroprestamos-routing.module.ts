import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroprestamosPage } from './registroprestamos.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroprestamosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroprestamosPageRoutingModule {}
