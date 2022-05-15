import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarClientPageRoutingModule } from './editar-client-routing.module';

import { EditarClientPage } from './editar-client.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarClientPageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  declarations: [EditarClientPage]
})
export class EditarClientPageModule {}