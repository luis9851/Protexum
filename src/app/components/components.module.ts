import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CardUserComponent } from './card-user/card-user.component';
import { IonicModule } from '@ionic/angular';
import { CardClientComponent } from './card-client/card-client.component';
import { CardServiceComponent } from './card-service/card-service.component';

@NgModule({
  declarations: [
    NavbarComponent,
    CardUserComponent,
    CardClientComponent,
    CardServiceComponent
  ],
  exports:[
    NavbarComponent,
    CardUserComponent,
    CardClientComponent,
    CardServiceComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
