import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroclientsPageRoutingModule } from './registroclients-routing.module';

import { RegistroclientsPage } from './registroclients.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RegistroclientsPageRoutingModule
  ],
  declarations: [RegistroclientsPage]
})
export class RegistroclientsPageModule {}
