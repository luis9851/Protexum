import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarServicePage } from './editar-service.page';

const routes: Routes = [
  {
    path: '',
    component: EditarServicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarServicePageRoutingModule {}
