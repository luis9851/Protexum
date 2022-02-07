import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroclientsPage } from './registroclients.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroclientsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroclientsPageRoutingModule {}
