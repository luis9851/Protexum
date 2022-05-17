import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { BorrowingService } from '../service/borrowing.service';
@Component({
  selector: 'app-borrow',
  templateUrl: './borrow.page.html',
  styleUrls: ['./borrow.page.scss'],
})
export class BorrowPage implements OnInit {
  id: string;

  borrow: any=[];
  constructor(private servicio: BorrowingService,private router: Router,private activatedRoute: ActivatedRoute) { }

ngOnInit(): void {
  this.activatedRoute.params.subscribe( params => {
    this.id = params['id'];
    this.servicio.getobtenerprestamo(params['id']).subscribe(data =>{
<<<<<<< HEAD
      this.borrow= data.prestamo
=======
      this.borrow= data.prestamos
>>>>>>> 71b56e215341e8c635abe65264214b8bfc280eee
     console.log(this.borrow)
    
    },
    error =>{

    });
  
  })
}

}