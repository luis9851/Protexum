import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OlvidastecontrasenaPageRoutingModule } from './olvidastecontrasena-routing.module';

import { OlvidastecontrasenaPage } from './olvidastecontrasena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OlvidastecontrasenaPageRoutingModule
  ],
  declarations: [OlvidastecontrasenaPage]
})
export class OlvidastecontrasenaPageModule {}