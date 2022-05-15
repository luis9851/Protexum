import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service/services/service.service';
import { Users } from '../models/users/users';
@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {


  load: boolean=false;
  res: any =[];
  users: Users[] =[]; 
  busc: any = [];
  search: String = "";
  

  constructor(private servicio : ServiceService , private router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit() : void{
    
    this.activatedRoute.queryParams.subscribe((params)=>{
      this.load = true;
      this.busc = params;
      console.log(this.busc.search);
      if(this.busc.search){
        this.Bsearch(this.busc.search);
      }else{
        this.obteneruser();

      }
    })
    
    
  }

  obteneruser(){
    this.servicio.getobtener().subscribe(res => {
      console.log(res.user)
      this.users = res.user;
      this.load = false;
    }, error => {
      console.log(error)
    })
  }
//
  Bsearch(sea: string){
    this.servicio.getSearch(sea).subscribe(res =>{
      console.log(res.user);
      this.users = res.user;
      this.load = false;
    },error => {
      console.log(error)
    })
  }

}