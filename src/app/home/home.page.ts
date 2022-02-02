import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service/services/service.service';
import { Users } from '../models/users/users';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  users: Users[] =[]; 

  constructor(private servicio : ServiceService , private router: Router) { }
 // obtener los usuario
  ngOnInit() {
    // setInterval(() => this. obteneruser(), 15000)
    this.servicio.getobtener().subscribe(res => {
      console.log(res.user)
      this.users = res.user
    })
  }
  
  obteneruser(){
    this.servicio.getobtener().subscribe(res => {
      console.log(res)
      this.users = res;
      
    }, error => {
      console.log(error)
    })
  }

  verUser(_id:number){
    this.router.navigate(['/libro', _id]);
  }

}
