import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableControlPage } from './table-control.page';

const routes: Routes = [
  {
    path: '',
    component: TableControlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TableControlPageRoutingModule {}
