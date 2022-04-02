import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BorrowPageRoutingModule } from './borrow-routing.module';

import { BorrowPage } from './borrow.page';
import { ComponentsModule } from '../components/components.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BorrowPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [BorrowPage]
})
export class BorrowPageModule {}