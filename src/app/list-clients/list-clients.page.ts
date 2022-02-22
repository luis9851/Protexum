import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service/services/service.service';
import { Clients } from '../models/clients/client';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.page.html',
  styleUrls: ['./list-clients.page.scss'],
})
export class ListClientsPage implements OnInit {


  load: boolean=false;
  res: any =[];
  clients: Clients[] =[]; 
  busc: any = [];
  search: String = "";

  constructor(private servicio : ServiceService , private router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit() : void{
    // setInterval(() => this. obteneruser(), 15000)
    this.obtenerclient();
    // this.activatedRoute.queryParams.subscribe((params)=>{
    //   this.load = true;
    //   this.busc = params;
    //   console.log(this.busc.search);
    //   if(this.busc.search){
    //     this.Bsearch(this.busc.search);
    //   }else{
    //     this.obtenerclient();

    //   }
    // })
  }

  // se usa para mandar a llamar los clientes que estan activos en la base de datos
  obtenerclient(){
    this.servicio.getobtenerclients().subscribe(res => {
      console.log(res.client)
      this.clients = res.client;
      this.load = false;
    }, error => {
      console.log(error)
    })
  }

  

}
