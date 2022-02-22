import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ClientsService } from 'src/app/service/clients.service';
@Component({
  selector: 'app-card-client',
  templateUrl: './card-client.component.html',
  styleUrls: ['./card-client.component.scss'],
})
export class CardClientComponent implements OnInit {

  @Input() clients: any = {};
  @Input() indexc: string;
  @Input() indexEc: string;
  

  @Output() userSeleccionado: EventEmitter<number>;
  
  constructor(private router: Router, private servicio: ClientsService, private toast: ToastController) {
    this.userSeleccionado = new EventEmitter();
   }

  ngOnInit() {}


  services(_id :string){
    this.indexc = _id;
    this.router.navigate(['/registroservices',this.indexc]);
    console.log(this.indexc)

  }

  verClient(_id: string){
    this.indexc = _id;
    this.router.navigate(['/client',this.indexc]);
    console.log(this.indexc)
   
  }

  Editar_U(_id: string){
    this.indexEc = _id;
    this.router.navigate(['/editar-client', this.indexEc]);
    console.log(this.indexEc)
  }

  delete(_id: string){
    this.servicio.deletecliente(_id).subscribe(data => {
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
