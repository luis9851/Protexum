import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service/services/service.service';
import { Services } from '../models/services/services';

@Component({
  selector: 'app-list-services',
  templateUrl: './list-services.page.html',
  styleUrls: ['./list-services.page.scss'],
})
export class ListServicesPage implements OnInit {


  load: boolean=false;
  res: any =[];
  services: Services[] =[]; 
  busc: any = [];
  search: String = "";
  constructor(private servicio : ServiceService , private router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // setInterval(() => this. obteneruser(), 15000)
    // this.obtenerservice();
    // this.activatedRoute.queryParams.subscribe((params)=>{
    //   this.load = true;
    //   this.busc = params;
    //   console.log(this.busc.search);
    //   if(this.busc.search){
    //     this.Bsearch(this.busc.search);
    //   }else{
    //     this.obtenerservice();

    //   }
    // })
  }

   // se usa para mandar a llamar los clientes que estan activos en la base de datos
   obtenerservice(){
    this.servicio.getobtenerservices().subscribe(res => {
      console.log(res.service)
      this.services = res.service;
      this.load = false;
    }, error => {
      console.log(error)
    })
  }

}
