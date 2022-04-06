import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarEquipPage } from './editar-equip.page';

const routes: Routes = [
  {
    path: '',
    component: EditarEquipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarEquipPageRoutingModule {}
