import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CardUserComponent } from './card-user/card-user.component';
import { IonicModule } from '@ionic/angular';
import { CardClientComponent } from './card-client/card-client.component';
import { CardServiceComponent } from './card-service/card-service.component';
import { CardBorrowComponent } from './card-borrow/card-borrow.component';


@NgModule({
  declarations: [
    NavbarComponent,
    CardUserComponent,
    CardClientComponent,
    CardServiceComponent,
    CardBorrowComponent
  ],
  exports:[
    NavbarComponent,
    CardUserComponent,
    CardClientComponent,
    CardServiceComponent,
    CardBorrowComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
