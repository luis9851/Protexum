import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarBorrowPage } from './editar-borrow.page';

const routes: Routes = [
  {
    path: '',
    component: EditarBorrowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarBorrowPageRoutingModule {}