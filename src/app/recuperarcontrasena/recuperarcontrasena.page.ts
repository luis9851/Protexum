import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoginService } from '../service/login.service';
import { NavbarComponent } from '../components/navbar/navbar.component';


@Component({
  selector: 'app-recuperarcontrasena',
  templateUrl: './recuperarcontrasena.page.html',
  styleUrls: ['./recuperarcontrasena.page.scss'],
})
export class RecuperarcontrasenaPage implements OnInit {


  token : String
  constructor(private router:Router ,private activateRoute: ActivatedRoute , private servicio: LoginService, private toast: ToastController) { }

  ngOnInit() {
    this.token = this.activateRoute.snapshot.paramMap.get("token")
  

    
  }
//recuerda controlar el error cuando el token expire
  Cambiarcontrasena(form){
    console.log(form)
    if(form.value.contrasena == "" || form.value.contrasena2 == ""){
     this.FaltanDatos()
    }if(form.value.contrasena != form.value.contrasena2 ){
     this.Errorcontrasena()
    }
    else{

      this.servicio.cambiarcontraseña(this.token, form.value.contrasena).subscribe( (res => {
        console.log(res)
       this.exito();
       this.router.navigate(['/login'])
      }))
    }
    
  }

  async exito(){
    const toast = await this.toast.create({
      message: "Cambio de contraseña exitoso",
      duration: 2000,
      position: "bottom"
    });
    toast.present()
  } 

  async FaltanDatos(){
    const toast = await this.toast.create({
      message: "Porfavor llena todos los datos",
      duration: 2000,
      position: "bottom"
    });
    toast.present()
  } 
  async Errorcontrasena(){
    const toast = await this.toast.create({
      message: "Las contraseñas no coinciden, Revisa que esten bien",
      duration: 3000,
      position: "bottom"
    });
    toast.present()
  } 
}
