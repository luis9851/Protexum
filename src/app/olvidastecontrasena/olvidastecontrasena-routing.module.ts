import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OlvidastecontrasenaPage } from './olvidastecontrasena.page';

const routes: Routes = [
  {
    path: '',
    component: OlvidastecontrasenaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OlvidastecontrasenaPageRoutingModule {}
