import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginService } from '../../service/login.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  public find: String = "";

  constructor(private router: Router, private servicio: LoginService) { }
  Apermisos : boolean = false;
  Spermisos : boolean = false;
  Gpermisos : boolean = false;
  A : string;
 Admin: string = "Admin";
 Guardia: string =  "Guardia";
 Supervisor: string = "Supervisor";
  ngOnInit( ) {
  this.servicio.disparadorderol.subscribe(data =>{
    console.log("recibiendo data ..", data.data)
  

    this.A =data.data
    console.log(this.A)
   
  })
    
  }

  

  buscar(termino: string){
    this.find = termino;
    this.router.navigate(['/main'], { queryParams: { search: this.find } });
  }

}