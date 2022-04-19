import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarEquipPageRoutingModule } from './editar-equip-routing.module';

import { EditarEquipPage } from './editar-equip.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarEquipPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditarEquipPage]
})
export class EditarEquipPageModule {}
