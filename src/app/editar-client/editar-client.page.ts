import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup , Validators  } from '@angular/forms'
import { LoginService } from '../service/login.service';
import { UserI } from '../models/user';

import { imageI } from '../models/images';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-client',
  templateUrl: './editar-client.page.html',
  styleUrls: ['./editar-client.page.scss'],
})
export class EditarClientPage implements OnInit {

// esta variebles son para redirecionar informacion

idUser : any
id: string;
  // variables para editar usuario
userForm: FormGroup
constructor(private servicio: LoginService, private activatedRoute:ActivatedRoute , private router: Router,
  private fb: FormBuilder) {
   this.userForm =  this.fb.group({
     nombre: ['', Validators.required],
    apellidos: ['', Validators.required],
     curp: ['', Validators.required],
     nsegurosocial: ['', Validators.required],
     rfc: ['', Validators.required],
     domicilio: ['', Validators.required],
     fechadeentrada: ['', Validators.required],
     fechadenacimiento: ['', Validators.required],
     telefono: ['', Validators.required],
     telefonoadicional: ['', Validators.required],
     creditodeInfonavit: ['', Validators.required],
     estadocivil: ['', Validators.required],
     correoelectronico: ['', Validators.required],
     talladeplayera: ['', Validators.required],
     talladepantalon: ['', Validators.required],
     pensionado: ['', Validators.required],
     niveldeescolaridad: ['', Validators.required],
     contrasena: ['', Validators.required],
     
   })

   this.activatedRoute.params.subscribe( params => {
    this.id = params['id'];
   
  })

   }


  ngOnInit() {
    this.Editar();
  }
  Editar(){

    if(this.id !== null){
     
      this.servicio.obtenerUser(this.id).subscribe( data => {

         console.log(data.user)
         

     let user = data.user;
     
       this.userForm.patchValue(user)
     
   //      // para poner en la parte de fecha la hora correcta
   // this.userForm.patchValue({ fechadeentrada: new Date(user.fechadeentrada).toLocaleDateString("en-GB")});
   // this.userForm.patchValue({ fechadenacimiento: new Date(user. fechadenacimiento).toLocaleDateString("en-GB")});
   // console.log(this.userForm.value)
       
      })
   }


 }

}
