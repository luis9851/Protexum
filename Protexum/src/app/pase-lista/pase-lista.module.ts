import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaseListaPageRoutingModule } from './pase-lista-routing.module';

import { PaseListaPage } from './pase-lista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaseListaPageRoutingModule
  ],
  declarations: [PaseListaPage]
})
export class PaseListaPageModule {}
