import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroprestamosPageRoutingModule } from './registroprestamos-routing.module';

import { RegistroprestamosPage } from './registroprestamos.page';
import { ComponentsModule } from '../components/components.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroprestamosPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [RegistroprestamosPage]
})
export class RegistroprestamosPageModule {}