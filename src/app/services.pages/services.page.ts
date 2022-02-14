import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service/services/service.service';


@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {
  @Input() index: string;
  @Input() indexS: string;

  public folder: string;
  service: any=[];
  id: string;
  accion: string = "2";
  public ismodelShown: boolean = false;
  constructor(private _Service: ServiceService,private router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.id = params['id'];
      this._Service.getobteneridservice(params['id']).subscribe(data =>{
        this.service = data.service;
      
       
      },
      error =>{

      });
    
    })
  }

}
