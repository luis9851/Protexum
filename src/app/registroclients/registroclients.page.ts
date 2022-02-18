import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup , Validators  } from '@angular/forms'
import { ClientsService } from '../service/clients.service';
import { UserI } from '../models/user';
import { NgForm } from '@angular/forms';
import { imageI } from '../models/images';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-registroclients',
  templateUrl: './registroclients.page.html',
  styleUrls: ['./registroclients.page.scss'],
})
export class RegistroclientsPage implements OnInit {



  idClient: String
  constructor(private servicio: ClientsService,  private router: Router,
    private toast: ToastController) { }

  ngOnInit() {
  }


  Registerclient(form : NgForm){
 console.log(form)
    
    if(form.value.nombre == "" || form.value.rfc == "" || form.value.correoelectronico == "" || 
    form.value.servicio == "" || form.value.domicilio == "" || form.value.telefono == "" || form.value.cdnombre == ""  ||
    form.value.cdtelefono == "" || form.value.cdcorreoelectronicoempresa == "" || form.value.cdcorreoelectronico == "" || form.value.rfcdefacturacion== "" ||
    form.value.domciliofiscal == "" || form.value.cfdi == "" || form.value.formadepago == "" || form.value.metododepago == "" || 
    form.value.fechadefacturacion == "" || form.value.tipodecredito == "" || form.value.comentarios == ""){ 

     this.FaltanDatos()
     
    
    }  else {        
          
               // los datos de el elemento
               this.servicio.register(form.value).subscribe( (res => {
                console.log(res.dataClient.id)

                this.exito()
                

 
              
              
                
    
               }))


   }
  
 
}


async exito(){
  const toast = await this.toast.create({
    message: "El registro fue exitoso",
    duration: 2000,
    position: "bottom"
  });
  toast.present()
} 


async FaltanDatos(){
  const toast = await this.toast.create({
    message: "Por Favor llena todos los datos",
    duration: 2000,
    position: "bottom"
  });
  toast.present()
} 
}
