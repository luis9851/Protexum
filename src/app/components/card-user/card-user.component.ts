import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ServiceService } from '../../service/services/service.service';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss'],
})
export class CardUserComponent implements OnInit {

  @Input() users: any = {};
  @Input() index: string;
  
  @Output() userSeleccionado: EventEmitter<number>;

  constructor(private router: Router, private servicio: LoginService, private toast: ToastController,private Sconsultas: ServiceService ) {
    this.userSeleccionado = new EventEmitter();
   }

  ngOnInit() {}

  verUser(_id: string){
    this.index = _id;
    this.router.navigate(['/user',this.index]);
    console.log(this.index)
   
  }
  delete(_id: string){
    this.servicio.deleteuser(_id).subscribe(data => {
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
