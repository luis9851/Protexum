import { Component,OnInit } from '@angular/core';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent implements OnInit  {
  Apermisos : boolean = false;
  Spermisos : boolean = false;
  Gpermisos : boolean = false;

 Admin: any = "Admin";
 Guardia: string =  "Guardia";
 Supervisor: string = "Supervisor"
  public appPages = [
    { title: 'Registro de Elementos', url: '/registro', icon: 'people'   },
  
    
  
  ];
  public appSpages = [
    
    { title: 'Lista de Elementos', url: '/lista-elementos', icon: 'list' },
  
  
  ];
  
  constructor( private servicio: LoginService) {}
 
  ngOnInit() {
   
    console.log(this.Apermisos)
  this.servicio.disparadorderol.subscribe(data =>{
    console.log("recibiendo data ..", data.data)
    if(data.data == this.Admin){
      console.log(this.Admin)
      this.Apermisos = true;
    
    
    } if(data.data == this.Supervisor){
      console.log(this.Spermisos);
      this.Spermisos = true
    }
  
   
  })
 
  }
   


  
}
