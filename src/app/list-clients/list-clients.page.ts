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
    
    this.obtenerclient();

  }

  obtenerclient(){
    this.servicio.getobtenerclients().subscribe(res => {
      this.clients = res.client;
      this.load = false;
    }, error => {
    
    })
  }

  

}