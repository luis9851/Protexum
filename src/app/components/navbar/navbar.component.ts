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


 Admin: any = "Admin";
 
  constructor(private router: Router, private servicio: LoginService) { }

  ngOnInit( ) {
  this.servicio.disparadorderol.subscribe(data =>{
  
    

  })
    
  }

  

  buscar(termino: string){
    this.find = termino;
    this.router.navigate(['/main'], { queryParams: { search: this.find } });
  }

}