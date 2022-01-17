import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CardUserComponent } from './card-user/card-user.component';



@NgModule({
  declarations: [
    NavbarComponent,
    CardUserComponent
  ],
  exports:[
    NavbarComponent,
    CardUserComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
