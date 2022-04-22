import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { LoginService } from '../service/login.service';
@Component({
  selector: 'app-olvidastecontrasena',
  templateUrl: './olvidastecontrasena.page.html',
  styleUrls: ['./olvidastecontrasena.page.scss'],
})
export class OlvidastecontrasenaPage implements OnInit {

  constructor(private toast: ToastController, private service : LoginService) { }

  ngOnInit() {
  }

  Mandarcorreo(form){


    if(form.value.correoelectronico == "" ){
      this.algofallo()
    }else {
      this.service.enviarcorreo(form.value).subscribe( (res => {
        this.exito()
        console.log(res.dataUser)
     
      }))

    }
  }

  async algofallo(){
    const toast = await this.toast.create({
      message: "El correo que ingresaste no es valido, Por favor, intentalo de nuevo",
      duration: 2000,
      position: "bottom"
    });
    toast.present()
  }

  async exito(){
    const toast = await this.toast.create({
      message: "Se a enviado el Correo para cambiar la contraseña ",
      duration: 2000,
      position: "bottom"
    });
    toast.present()
  }
}