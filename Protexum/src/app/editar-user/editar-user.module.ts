import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarUserPageRoutingModule } from './editar-user-routing.module';
// import { MAT_DATE_LOCALE} from '@angular/material/core'
import { EditarUserPage } from './editar-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarUserPageRoutingModule,
    ReactiveFormsModule,
    
   
  ],
  declarations: [EditarUserPage],
  // providers:[
  //   {provide: MAT_DATE_LOCALE, useValue: 'en-GB'}
  // ]
})
export class EditarUserPageModule {}
