
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { BorrowingService } from 'src/app/service/borrowing.service';

@Component({
  selector: 'app-card-borrow',
  templateUrl: './card-borrow.component.html',
  styleUrls: ['./card-borrow.component.scss'],
})
export class CardBorrowComponent implements OnInit {
  @Input() borrow: any = {};
  @Input() indexP: string;
  @Input() indexEP: string;

  @Output() userSeleccionado: EventEmitter<number>;
  
  constructor(private router: Router, private servicio: BorrowingService, private toast: ToastController) {
    this.userSeleccionado = new EventEmitter();
   }

  ngOnInit() {
   
  }



  
  verPrestamo(_id: string){
    this.indexP = _id;
    this.router.navigate(['/borrow',this.indexP]);
    console.log(this.indexP)
   
  }


  Editar_P(_id: string){
    this.indexEP = _id;
    this.router.navigate(['/editar-borrow', this.indexEP]);
    console.log(this.indexEP)
  }

  delete(_id: string){
    this.servicio.deletePrestamos(_id).subscribe(data => {
      this.presentToast();

    })
  }
  async presentToast(){
    const toast = await this.toast.create({
      message: "Prestamo pagado con exito",
      duration: 2000,
      position: "bottom"
    });
    toast.present()
  } 

  }