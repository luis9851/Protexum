import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { BorrowingService } from '../service/borrowing.service';

@Component({
  selector: 'app-borrow',
  templateUrl: './borrow.page.html',
  styleUrls: ['./borrow.page.scss'],
})
export class BorrowPage implements OnInit {


  borrow: any=[];
  id: string;
  constructor(private servicio:BorrowingService ,private router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.id = params['id'];
      console.log(this.id)
      this.servicio.getobteneridprestamo(params['id']).subscribe(data =>{
       console.log(data.borrow)
       
       
        this.borrow= data.borrow
        
      },
      error =>{

      });
    
    })
  }

}
