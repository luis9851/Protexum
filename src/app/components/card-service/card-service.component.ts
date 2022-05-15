import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ServiceService } from 'src/app/service/services/service.service';
@Component({
  selector: 'app-card-service',
  templateUrl: './card-service.component.html',
  styleUrls: ['./card-service.component.scss'],
})
export class CardServiceComponent implements OnInit {

  
  @Input() services: any = {};
  @Input() indexs: string;
  @Input() indexS: string;
  @Output() userSeleccionado: EventEmitter<number>;
  constructor(private router: Router, private servicio: ServiceService, private toast: ToastController) {
    this.userSeleccionado = new EventEmitter();
   }

  ngOnInit() {
 
  }
  Controldeplaneacion(_id: string){
    this.indexs = _id;
    this.router.navigate(['/table-control',this.indexs]);
   
  }
  AgregarGuardia(_id: string, nombre:string){
    this.indexs = _id;
    
    this.router.navigate(['/home',this.indexs,nombre]);
   
  }
  verService(_id: string){
    this.indexs = _id;
    this.router.navigate(['/services',this.indexs]);
    
   
  }

  Editar_U(_id: string){
    this.indexS = _id;
    this.router.navigate(['/editar-service', this.indexS]);
    
  }

  delete(_id: string){
    this.servicio.deleteservice(_id).subscribe(data => {
      this.presentToast();

    })
  }

  async presentToast(){
    const toast = await this.toast.create({
      message: "El Usuario fue eliminado con exito",
      duration: 2000,
      position: "bottom"
    });
    toast.present()
  } 
}