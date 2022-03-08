import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { BorrowingService } from '../../service/borrowing.service';

@Component({
  selector: 'app-card-borrow',
  templateUrl: './card-borrow.component.html',
  styleUrls: ['./card-borrow.component.scss'],
})
export class CardBorrowComponent implements OnInit {
  @Input() borrow: any = {};
  @Input() indexb: string;
  @Input() indexEc: string;
 
  @Output() userSeleccionado: EventEmitter<number>;
  
  constructor(private router: Router, private servicio: BorrowingService, private toast: ToastController) {
    this.userSeleccionado = new EventEmitter();
   }
  ngOnInit() {}

  

  verPrestamo(_id: string){
    this.indexb = _id;
    this.router.navigate(['/Borrow',this.indexb]);
    console.log(this.indexb)
   
  }

  Editar_U(_id: string){
    this.indexEc = _id;
    this.router.navigate(['/editar-client', this.indexEc]);
    console.log(this.indexEc)
  }

  // delete(_id: string){
  //   this.servicio.deletecliente(_id).subscribe(data => {
  //     this.presentToast();

  //   })
  // }

  async presentToast(){
    const toast = await this.toast.create({
      message: "El Usuario fue eliminado con exito",
      duration: 2000,
      position: "bottom"
    });
    toast.present()
  } 
}
