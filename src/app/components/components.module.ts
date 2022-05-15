import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CardUserComponent } from './card-user/card-user.component';
import { IonicModule } from '@ionic/angular';
import { CardClientComponent } from './card-client/card-client.component';
import { CardServiceComponent } from './card-service/card-service.component';
import { MessageComponent } from './message/message.component';
import { CardBorrowComponent } from './card-borrow/card-borrow.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,
    CardUserComponent,
    CardClientComponent,
    CardServiceComponent,
    MessageComponent,
    CardBorrowComponent
    
  ],
  exports:[
    NavbarComponent,
    CardUserComponent,
    CardClientComponent,
    CardServiceComponent,
    MessageComponent,
    CardBorrowComponent
    
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
    
  ]
})
export class ComponentsModule { }