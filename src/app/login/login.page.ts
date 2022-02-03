import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  

  constructor(private servicio: LoginService, private router: Router, private alertController: AlertController) { }

  ngOnInit() {
 
  }

  Login(form){
    
    if(form.value.correoelectronico == "" || form.value.contrasena == ""){
     
     this.presentAlert()
    
    } else{
    this.servicio.disparadoralertas.subscribe(data => {
      
      if(data.data == '409'){
        this.algofallo()
    
        }  
   })
  }
  this.servicio.login(form.value).subscribe(res =>{
    console.log(res.dataUser)
    
    this.servicio.disparadorderol.emit({
      data: res.dataUser.rol
    })

    this.router.navigate(['/home'])

     
  })
   


  }
  async presentAlert(){
    const alert = await this.alertController.create({
      header: "LLena todos los datos ",
      buttons:["ok"]
    });
    await alert.present()
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  async algofallo(){
    const alert = await this.alertController.create({
      header: "La contraseña o correo que ingresaste no es valido, Por favor, intentalo de nuevo",
      buttons:["ok"]
    });
    await alert.present()
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  async exelente(){
    const alert = await this.alertController.create({
      header: "Bienvenido",
      buttons:["ok"]
    });
    await alert.present()
    let result = await alert.onDidDismiss();
    console.log(result);
  }

}
