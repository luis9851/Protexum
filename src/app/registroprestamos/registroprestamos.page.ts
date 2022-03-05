import { Component, OnInit } from '@angular/core';

import { BorrowingService } from '../service/borrowing.service';
import {FormBuilder, FormControl, FormGroup , Validators  } from '@angular/forms'
import { NgForm } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registroprestamos',
  templateUrl: './registroprestamos.page.html',
  styleUrls: ['./registroprestamos.page.scss'],
})
export class RegistroprestamosPage implements OnInit {
// notas recuerda que vas a mandar a llamar el nombre de guardia y lo vas a poner en el form para que sea facil 
// y despues vas a mandar a llamar en perfil de usuario los prestamos 
  id: string;
  // variables para editar servicios
borrowingForm: FormGroup
  constructor(private servicio: BorrowingService,  private router: Router,
    private toast: ToastController,  private activatedRoute: ActivatedRoute, private fb: FormBuilder) {
      this.borrowingForm =  this.fb.group({
        nombreg: ['', Validators.required],
        montoprestado: ['', Validators.required],
        fechadepresamo: ['', Validators.required],
        numerodepagos: ['', Validators.required],
      })

      this.activatedRoute.params.subscribe( params => {
        this.id = params['id'];
        
      
      })
     }

  ngOnInit() {
   
  }
  Register(){
   // los datos de el elemento
   this.servicio.registrar(this.id,this.borrowingForm.value).subscribe( (res => {
   console.log(res.dataPrestamo.id)
   
   this.agregaridDeServicioausuario(res.dataPrestamo.id)
   this.router.navigate(['/home'])
       
   }))
  
   
  }

  agregaridDeServicioausuario(idprestamo){
   
    this.servicio.actualizar_usuarioid(this.id, idprestamo).subscribe((res => {    
      console.log(res)

    } ) )
    
    }
}   
    
   
 
  
  
 

