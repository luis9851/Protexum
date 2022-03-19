import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarClientPage } from './editar-client.page';

const routes: Routes = [
  {
    path: '',
    component: EditarClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarClientPageRoutingModule {}