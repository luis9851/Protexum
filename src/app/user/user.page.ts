import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service/services/service.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  @Input() index: string;
  @Input() indexE: string;
  public folder: string;
  dd: string
  mm: string
  yy: string
  ddE: string
  mmE: string
  yyE: string
  user: any=[];
  id: string;
  accion: string = "2";
 
  public ismodelShown: boolean = false;
  constructor(private _Service: ServiceService,private router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.id = params['id'];
      this._Service.getobtenerid(params['id']).subscribe(data =>{
        this.user = data.user;
       
       // formato de fechas
      this.yy = this.user.fechadenacimiento[0] + this.user.fechadenacimiento[1] + this.user.fechadenacimiento[2] + this.user.fechadenacimiento[3];
      this.mm =  this.user.fechadenacimiento[5] + this.user.fechadenacimiento[6];
      this.dd = this.user.fechadenacimiento[8] + this.user.fechadenacimiento[0];
      // fecha de entrada
      this.yyE = this.user.fechadeentrada[0] + this.user.fechadeentrada[1] + this.user.fechadeentrada[2] + this.user.fechadeentrada[3];
      this.mmE =  this.user.fechadeentrada[5] + this.user.fechadeentrada[6];
      this.ddE = this.user.fechadeentrada[8] + this.user.fechadeentrada[0];     
      },
      error =>{

      });
    
    })
    
  }  
  }
