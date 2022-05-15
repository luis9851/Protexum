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
    
     this.obtenerservice();
 
  }

   obtenerservice(){
    this.servicio.getobtenerservices().subscribe(res => {
     
      this.services = res.service;
      this.load = false;
    }, error => {
    
    })
  }

}