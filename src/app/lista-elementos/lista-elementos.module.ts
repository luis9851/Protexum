import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaElementosPageRoutingModule } from './lista-elementos-routing.module';

import { ListaElementosPage } from './lista-elementos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaElementosPageRoutingModule
  ],
  declarations: [ListaElementosPage]
})
export class ListaElementosPageModule {}
