import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { EditarBorrowPageRoutingModule } from './editar-borrow-routing.module';

import { EditarBorrowPage } from './editar-borrow.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarBorrowPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditarBorrowPage]
})
export class EditarBorrowPageModule {}
