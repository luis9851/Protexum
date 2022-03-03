import { Component, OnInit } from '@angular/core';
import { EquipoService } from '../service/equipo.service';
import { NgForm } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-equiporecibido',
  templateUrl: './equiporecibido.page.html',
  styleUrls: ['./equiporecibido.page.scss'],
})
export class EquiporecibidoPage implements OnInit {

  id: string;
  
  constructor(private servicio: EquipoService, private toast: ToastController, private activateRoute: ActivatedRoute , private router: Router) { }

  ngOnInit() {
    this.activateRoute.params.subscribe( params => {
      this.id = params['id'];
      console.log(this.id)
    
    })
  }

  Register(form : NgForm){
    console.log(form)
    
      if(form.value.celular == "" || form.value.radio == "" || form.value.lamparas == "" || 
      form.value.dcelular == "" || form.value.dradio == "" || form.value.dlamparas == "" || 
      form.value.fornitura == "" || form.value.tonfa == "" || form.value.gas == "" || form.value.teaser == ""  ||
      form.value.dfornitura == "" || form.value.dtonfa == "" || form.value.dgas == "" || form.value.dteaser == ""  ||
      form.value.impermeable == "" || form.value.espejoderevision == "" || form.value.detectordemetales == "" || form.value.mazo == "" ||
      form.value.dimpermeable == "" || form.value.despejoderevision == "" || form.value.ddetectordemetales == "" || form.value.dmazo == "" ||
      form.value.botasimpermeables == "" || form.value.bicicleta == "" || form.value.patrulla == "" || form.value.rondinero == "" ||
      form.value.dbotasimpermeables == "" || form.value.dbicicleta == "" || form.value.dpatrulla == "" || form.value.drondinero == "" ){ 
  
       this.FaltanDatos()
       
      
      }  else {       
                 // los datos de el equipo
                 this.servicio.registerE(this.id, form.value).subscribe( (res => {
    
                 this.exito()
                 console.log(res.dataEquip); 
               

                  this.agregaridenequipo(res.dataEquip.id)
                  
                  // this.router.navigate(['[/list-clients] '])

                    
                  }))
     }
    
   
  }
  agregaridenequipo(idservicio:string){


   this.servicio.actualizarIdUsuario( this.id, idservicio ).subscribe( (res => {
     console.log(res)
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
