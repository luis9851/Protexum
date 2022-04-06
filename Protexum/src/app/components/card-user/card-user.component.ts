import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoginService } from '../../service/login.service';
import { ServiceService } from 'src/app/service/services/service.service';
@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss'],
})
export class CardUserComponent implements OnInit {

  @Input() users: any = {};
  @Input() index: string;
  @Input() indexE: string;
  @Input() indexp: string;
  @Output() userSeleccionado: EventEmitter<number>;
  public ismodelShown: boolean = false;
  id: String = "";
  idservice: string ;
  hayservicio: boolean = false;
  constructor(private router: Router, private activateRouter: ActivatedRoute,private servicio: LoginService, private toast: ToastController, private servicio2: ServiceService) {
    this.userSeleccionado = new EventEmitter();
   }

  ngOnInit() {
    this.activateRouter.params.subscribe( params => {
      this.idservice = params['id'];
      console.log(this.users.Servicio._id)

   


      // falto cambiarle para que si ya le toco le servicio no aparezca
      if( this.idservice != null && this.users.rol == 'Guardia' ){
        this.hayservicio = true ;
        
      }  else if( this.users.rol != 'Guardia' ){
        this.hayservicio = false ;
       
      } 
      
    })
  }

  Agregar(_id :string){
   this.servicio.AgregarServicios(_id,this.idservice).subscribe((res => {
  console.log(res)
  this.router.navigate(['/list-services']);
  this.AgregaraServicio(_id)
  } ))

  }

  AgregaraServicio(_id){
    this.servicio2.AgregarGuardias(this.idservice,_id).subscribe((res => {
   console.log(res)
   } ))
 
   }

  prestamos(_id :string){
    this.indexp = _id;
    this.router.navigate(['/registroprestamos',this.indexp]);
    console.log(this.indexp)

  }

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