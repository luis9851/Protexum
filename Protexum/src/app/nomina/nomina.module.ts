import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NominaPageRoutingModule } from './nomina-routing.module';

import { NominaPage } from './nomina.page';
import {MatInputModule} from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button';
import{ MatIconModule} from '@angular/material/icon'
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NominaPageRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatNativeDateModule,
    MatFormFieldModule,
    ComponentsModule
    
  ],
  declarations: [NominaPage]
})
export class NominaPageModule {}
