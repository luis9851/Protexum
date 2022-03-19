import { Component, OnInit } from '@angular/core';

import { BorrowingService } from '../service/borrowing.service';
import {FormBuilder, FormControl, FormGroup , Validators  } from '@angular/forms'


import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registroprestamos',
  templateUrl: './registroprestamos.page.html',
  styleUrls: ['./registroprestamos.page.scss'],
})
export class RegistroprestamosPage implements OnInit {

  id: string;
  // variables para editar servicios
borrowingForm: FormGroup
  constructor(private servicio: BorrowingService,  private router: Router,
    private toast: ToastController,  private activatedRoute: ActivatedRoute, private fb: FormBuilder) {
      this.borrowingForm =  this.fb.group({
        nombre: ['', Validators.required],
        montoprestado: ['', Validators.required],
        fechadeprestamo: ['', Validators.required],
        numerodepagos: ['', Validators.required],
        
      })

      this.activatedRoute.params.subscribe( params => {
        this.id = params['id'];
        
      
      })
     }

  ngOnInit() {
    this.consultardatos()
  }

  consultardatos(){

    if(this.id !== null){
     
      this.servicio.obteneruser(this.id).subscribe( data => {

         console.log(data.user)
     let user = data.user;
   
     
       this.borrowingForm.patchValue(user)
     
       
       
      })
   }


 }
  Register(){
  
     if(this.borrowingForm.value.nombre == "" || this.borrowingForm.value.montoprestado == "" || this.borrowingForm.value.fechadeprestamo == ""  
     ){
       this.FaltanDatos()
     } 
     else { 
   // los datos de el elemento
   this.servicio.registrar(this.id,this.borrowingForm.value).subscribe( (res => {
   console.log(res.dataPrestamo.id)
   this.exito()
   this.agregaridDeServicioausuario(res.dataPrestamo.id)
   this.router.navigate(['/main'])
       
   }))
  
  }
  }

  agregaridDeServicioausuario(idprestamo){
   
    this.servicio.actualizar_usuarioid(this.id, idprestamo).subscribe((res => {    
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
    
   
 
  
  
 
