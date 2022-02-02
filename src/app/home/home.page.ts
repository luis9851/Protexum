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

  users: any=[]; 

  constructor(private _Service: ServiceService, private router: Router) { }

  ngOnInit() {
    this._Service.getUsers().subscribe(res => {
      this.users = res;
    })
  }

  verUser(_id:number){
    this.router.navigate(['/libro', _id]);
  }

}
