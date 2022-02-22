import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarClientPageRoutingModule } from './editar-client-routing.module';

import { EditarClientPage } from './editar-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarClientPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditarClientPage]
})
export class EditarClientPageModule {}
