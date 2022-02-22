import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup , Validators  } from '@angular/forms'
import { ClientsService } from '../service/clients.service';
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
clientForm: FormGroup
constructor(private servicio: ClientsService, private activatedRoute:ActivatedRoute , private router: Router,
  private fb: FormBuilder) {
   this.clientForm =  this.fb.group({
     nombre: ['', Validators.required],
     rfc: ['', Validators.required],
     correoelectronico: ['', Validators.required],
     servicio: ['', Validators.required],
     domicilio: ['', Validators.required],
     telefono: ['', Validators.required],
     cdnombre: ['', Validators.required],
     cdtelefono: ['', Validators.required],
     cdcorreoelectronicoempresa: ['', Validators.required],
     cdcorreoelectronico: ['', Validators.required],
     rfcdefacturacion: ['', Validators.required],
     domciliofiscal: ['', Validators.required],
     cfdi: ['', Validators.required],
     formadepago: ['', Validators.required],
     metododepago: ['', Validators.required],
     fechadefacturacion: ['', Validators.required],
     tipodecredito: ['', Validators.required],
     comentarios: ['', Validators.required]
     
   })

   this.activatedRoute.params.subscribe( params => {
    this.id = params['id'];
   
  })

   }


  ngOnInit() {
    this.consultardatos();
  }
  consultardatos(){

    if(this.id !== null){
     
      this.servicio.obtenerClient(this.id).subscribe( data => {

         console.log(data.client)
         

     let client = data.client;
     
       this.clientForm.patchValue(client)
     
       
       
      })
   }


 }

 actualizar(){
  // recorada ponerle  y preguntar si los datos esta bien puestos
      this.servicio.Editar_C(this.id ,this.clientForm.value ).subscribe(  ( res => {
       console.log(res.dataClient);
     //  // igualo la variable idUser para que tenga los datos de id del user
        this.idUser = this.id
        
       
 
    
 
       this.router.navigate(['/list-clients'])
      }
     
      ))
   }

}
