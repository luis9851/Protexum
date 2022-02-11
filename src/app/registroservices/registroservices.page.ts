import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/services/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registroservices',
  templateUrl: './registroservices.page.html',
  styleUrls: ['./registroservices.page.scss'],
})
export class RegistroservicesPage implements OnInit {

  constructor( private servicio: ServiceService,  private router: Router, private toast: ToastController) { }

  ngOnInit() {
  }

  Registerservice(form){

    if(form.value.cantidaddeguardiasporturno == "" || form.value.cantidaddeguardiasporturnonoche == "" || form.value.contactodelservicio == "" || 
    form.value.domicilio == "" || form.value.jefedeservicio == "" || form.value.nombre == "" || form.value.telefono == ""  ||
    form.value.telefonoprotexum == "" || form.value.tipodeservicio == "" ){ 

     this.FaltanDatos()
     
    
    } 


    
  this.servicio.registrarS(form.value).subscribe( (res => {
    console.log(res.dataService)
    this.exito();


    this.router.navigate(['/'])
  }))
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
