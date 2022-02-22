import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListClientsPage } from './list-clients.page';

const routes: Routes = [
  {
    path: '',
    component: ListClientsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListClientsPageRoutingModule {}
