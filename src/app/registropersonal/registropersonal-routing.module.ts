import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistropersonalPage } from './registropersonal.page';

const routes: Routes = [
  {
    path: '',
    component: RegistropersonalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistropersonalPageRoutingModule {}
