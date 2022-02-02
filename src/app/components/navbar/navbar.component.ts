import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../service/login.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private servicio: LoginService) { }
  Apermisos : boolean = false;
  Spermisos : boolean = false;
  Gpermisos : boolean = false;

 Admin: any = "Admin";
 Guardia: string =  "Guardia";
 Supervisor: string = "Supervisor";
  ngOnInit( ) {

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

  /* buscarLibro(termino:string){
    this.router.navigate(['/buscar',termino]);
  } */

}
