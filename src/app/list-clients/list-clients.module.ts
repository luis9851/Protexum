import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListClientsPageRoutingModule } from './list-clients-routing.module';

import { ListClientsPage } from './list-clients.page';
import { ComponentsModule } from '../components/components.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListClientsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ListClientsPage]
})
export class ListClientsPageModule {}