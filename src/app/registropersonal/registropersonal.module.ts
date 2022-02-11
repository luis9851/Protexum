import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistropersonalPageRoutingModule } from './registropersonal-routing.module';

import { RegistropersonalPage } from './registropersonal.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RegistropersonalPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RegistropersonalPage]
})
export class RegistropersonalPageModule {}
