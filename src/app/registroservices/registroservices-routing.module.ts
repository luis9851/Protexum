import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroservicesPage } from './registroservices.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroservicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroservicesPageRoutingModule {}