import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/services/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController, IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-registroservices',
  templateUrl: './registroservices.page.html',
  styleUrls: ['./registroservices.page.scss'],
})
export class RegistroservicesPage implements OnInit {


 
  id: string;
  constructor( private servicio: ServiceService,  private router: Router, private toast: ToastController, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.id = params['id'];
      
    
    })
  }

  Registerservice(form){
    console.log(form)

    if(form.value.turno12x12 == "" || form.value.turno24x24 == "" || form.value.contactodelservicio == "" || 
    form.value.domicilio == "" || form.value.jefedeservicio == "" || form.value.nombre == "" || form.value.telefono == ""  ||
    form.value.telefonoprotexum == "" || form.value.tipodeservicio == "" ||
    form.value.lturnodoce == "" || form.value.lturnoNdoce == "" || form.value.lturnovienti == "" ||
    form.value.mturnodoce == "" || form.value.mturnoNdoce == "" || form.value.mturnovienti == "" ||
    form.value.miturnodoce == ""|| form.value.miturnoNdoce == "" || form.value.miturnovienti == "" ||
    form.value.jturnodoce == "" || form.value.jturnoNdoce == "" ||form.value.jturnovienti == "" ||
    form.value.vturnodoce == "" || form.value.vturnoNdoce == "" || form.value.vturnovienti == "" ||
    form.value.sturnodoce == "" || form.value.sturnoNdoce == "" || form.value.sturnovienti == "" ||
    form.value.dturnodoce == "" || form.value.dturnoNdoce == "" || form.value.dturnovienti == "" ){ 

     this.FaltanDatos()
     
    
    } 


    
  this.servicio.registrarS(this.id,form.value).subscribe( (res => {
    console.log(res.dataService)
     res.dataService.id;
   
    this.exito();


    
     this.agregaridDeServicioausuario(res.dataService.id)
     this.router.navigate([`/equiporecibido/${res.dataService.id}`])
    
  }))
  }

  agregaridDeServicioausuario(idService){
    this.servicio.actualizar_servicioid(this.id, idService).subscribe((res => {
    
     
      console.log(res)
      


    } ) )
    
     


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