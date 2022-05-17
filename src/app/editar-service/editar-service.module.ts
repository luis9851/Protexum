import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarServicePageRoutingModule } from './editar-service-routing.module';

import { EditarServicePage } from './editar-service.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarServicePageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  declarations: [EditarServicePage]
})
export class EditarServicePageModule {}
