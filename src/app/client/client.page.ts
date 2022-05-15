import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service/services/service.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.page.html',
  styleUrls: ['./client.page.scss'],
})
export class ClientPage implements OnInit {

  @Input() indexc: string;
  dd: string
  mm: string
  yy: string
  client: any=[];
  services: any[] =[]; 

  id: string;

  constructor(private _Service: ServiceService,private router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params => {
      this.id = params['id'];

      this._Service.getobteneridcliente(params['id']).subscribe(data =>{
 
        this.client= data.client
        this.services= data.client.servicios
        
    
      this.yy = this.client.fechadefacturacion[0] + this.client.fechadefacturacion[1] + this.client.fechadefacturacion[2] + this.client.fechadefacturacion[3];
      this.mm =  this.client.fechadefacturacion[5] + this.client.fechadefacturacion[6];
      this.dd = this.client.fechadefacturacion[8] + this.client.fechadefacturacion[0];

  
      
      },
      error =>{

      });
    
    })
  }

}