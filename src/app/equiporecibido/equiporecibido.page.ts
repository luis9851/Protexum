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

  idClient: string;
  
  constructor(private servicio: EquipoService, private toast: ToastController, private activateRoute: ActivatedRoute , private router: Router) { }

  ngOnInit() {
    this.idClient = this.activateRoute.snapshot.paramMap.get("id")
  }

  Register(form : NgForm){
    console.log(form)
    
      if(form.value.celular == "" || form.value.radio == "" || form.value.lamparas == "" || 
      form.value.fornitura == "" || form.value.tonfa == "" || form.value.gas == "" || form.value.teaser == ""  ||
      form.value.impermeable == "" || form.value.espejoderevision == "" || form.value.detectordemetales == "" || form.value.mazo == "" ||
      form.value.botasimpermeables == "" || form.value.bicicleta == "" || form.value.patrulla == "" || form.value.rondinero == "" ){ 
  
       this.FaltanDatos()
       
      
      }  else {       
                 // los datos de el equipo
                 this.servicio.registerE(form.value).subscribe( (res => {
    
                 this.exito()
                 console.log(res.dataEquip); 
               

                    this.agregaridenequipo(res.dataEquip.id)

                    this.router.navigate(['/list-clients'])
                  }))
     }
    
   
  }
  agregaridenequipo(id:string){


  this.servicio.actualizarIdUsuario(id, this.idClient ).subscribe( (res => {
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
