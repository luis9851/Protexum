import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistromultaPageRoutingModule } from './registromulta-routing.module';

import { RegistromultaPage } from './registromulta.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistromultaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RegistromultaPage]
})
export class RegistromultaPageModule {}
