import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroservicesPageRoutingModule } from './registroservices-routing.module';

import { RegistroservicesPage } from './registroservices.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroservicesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RegistroservicesPage]
})
export class RegistroservicesPageModule {}