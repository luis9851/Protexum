import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TableControlPageRoutingModule } from './table-control-routing.module';

import { TableControlPage } from './table-control.page';
import { ComponentsModule } from '../components/components.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TableControlPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TableControlPage]
})
export class TableControlPageModule {}
