import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss'],
})
export class CardUserComponent implements OnInit {

  @Input() users: any = {};
  @Input() index: string;
  @Input() indexE: string;
  @Output() userSeleccionado: EventEmitter<number>;
  public ismodelShown: boolean = false;
  id: String = "";

  constructor(private router: Router, private activateRouter: ActivatedRoute,private servicio: LoginService, private toast: ToastController) {
    this.userSeleccionado = new EventEmitter();
   }

  ngOnInit() {}

  confirmar(){
    this.ismodelShown = false;
  }

  cerrarModal(configuracion:boolean){
    this.ismodelShown = false;
    if(configuracion){
      console.log('Eliminar' + this.ismodelShown);
      /* this.delete(); */
      console.log('Eliminado'+this.id);
    }else{
      console.log('No elimar' + this.ismodelShown);
    }
  }
  
  verUser(_id: string){
    this.index = _id;
    this.router.navigate(['/user',this.index]);
    console.log(this.index)
   
  }

  Editar_U(_id: string){
    this.indexE = _id;
    this.router.navigate(['/editar-user', this.indexE]);
    console.log(this.indexE)
  }

  delete(_id: string){
    this.id == _id;
    this.servicio.eliminarusuario(_id).subscribe(data => {
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
