import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MultaService } from '../service/multa.service';

import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ComponentsModule } from '../components/components.module';

@Component({
  selector: 'app-registromulta',
  templateUrl: './registromulta.page.html',
  styleUrls: ['./registromulta.page.scss'],
})
export class RegistromultaPage implements OnInit {
  idS: string;
  idG : string;
  nombreG: string;
  apellidosG:string;
  idM:string ;
  constructor(private servicio: MultaService,  private router: Router,
    private toast: ToastController,  private activatedRoute: ActivatedRoute, ){

    }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.idG = params['idG']
      this.idS = params['id']
      this.nombreG =params['nombre'];
      this.apellidosG = params['apellidos']
   
      
    })
  }


  Register(form : NgForm){
   

    if(form.value.nombre == "" || form.value.apellidos == "" || form.value.fechademulta == "" || 
         form.value.cantidadmulta == "" || form.value.motivo ==""   ){ 

     this.FaltanDatos()
     
    
    }  else {        
    
               // los datos de el elemento
               this.servicio.registrar(form.value,this.idG).subscribe( (res => {
  
               this.exito()
               console.log(res.multa);
               this.idM = res.multa._id;
               console.log(this.idM)
               console.log(this.idG)
               this.servicio.agregarmultasaguardias(this.idG,this.idM).subscribe( (res => {
                console.log(res)
              }))
             
               this.router.navigate(['/table-control',this.idS]);
    
          
      
              
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
