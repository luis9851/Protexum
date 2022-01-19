import { Router,ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/services/service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  public folder: string;
  user: any=[];
  id: string = "";
  accion: string = "2";
  public ismodelShown: boolean = false;
  constructor(private _Service: ServiceService,private router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.id = params['id'];
      this._Service.getUser(params['id']).subscribe(usuario =>{
        this.user = usuario;
      },
      error =>{

      });
      console.log(this.user);
    })
  }

}
