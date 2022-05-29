import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';


import { AngularDelegate, IonicModule, IonicRouteStrategy } from '@ionic/angular';


/* Componets */
import { AppComponent } from './app.component';
/* modules */
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageModule } from './login/login.module';
/* Pages */
import { HomePageModule } from './home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
     IonicModule.forRoot(), 
     AppRoutingModule, 
     ComponentsModule,
     HttpClientModule,
      LoginPageModule,
      HomePageModule,
     
    BrowserAnimationsModule],
  exports:[AppComponent],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {}