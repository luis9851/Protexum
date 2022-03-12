import { Component, OnInit } from '@angular/core';

import { BorrowingService } from '../service/borrowing.service';
import {FormBuilder, FormControl, FormGroup , Validators  } from '@angular/forms'


import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-editar-borrow',
  templateUrl: './editar-borrow.page.html',
  styleUrls: ['./editar-borrow.page.scss'],
})
export class EditarBorrowPage implements OnInit {


  id: string;
  // variables para editar servicios
borrowingEForm: FormGroup
  constructor(private servicio: BorrowingService,  private router: Router,
    private toast: ToastController,  private activatedRoute: ActivatedRoute, private fb: FormBuilder) {
      this.borrowingEForm =  this.fb.group({
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
     
      this.servicio.obtenerPrestamos(this.id).subscribe( data => {

         console.log(data.prestamo)
         

     let prestamo = data.prestamo;
     
       this.borrowingEForm.patchValue(prestamo)
     
       
       
      })
   }


 }
 Editar_Pe(){
   // los datos de el elemento
   this.servicio.Editar_P(this.id,this.borrowingEForm.value).subscribe( (res => {
   console.log(res.dataPrestamo.id)
   this.exito()
 
   this.router.navigate(['/home'])
       
   }))
  
   
  }
  async exito(){
    const toast = await this.toast.create({
      message: "la Actualizacion fue exitosa",
      duration: 2000,
      position: "bottom"
    });
    toast.present()
  } 
}
