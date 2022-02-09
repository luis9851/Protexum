import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoginService } from '../service/login.service';


@Component({
  selector: 'app-recuperarcontrasena',
  templateUrl: './recuperarcontrasena.page.html',
  styleUrls: ['./recuperarcontrasena.page.scss'],
})
export class RecuperarcontrasenaPage implements OnInit {


  token : String
  constructor(private activateRoute: ActivatedRoute , private servicio: LoginService, private toast: ToastController) { }

  ngOnInit() {
    // this.token = this.activateRoute.snapshot.paramMap.get("token")
    // console.log(this.token)

    
  }
//recuerda controlar el error cuando el token expire
  Cambiarcontrasena(form){
    if(form.value.contrasena == ""){
     this.FaltanDatos()
    }else
    this.servicio.cambiarcontraseña(form.value).subscribe( (res => {

    }))
  }


  async FaltanDatos(){
    const toast = await this.toast.create({
      message: "Porfavor llena todos los datos",
      duration: 2000,
      position: "bottom"
    });
    toast.present()
  } 
}
