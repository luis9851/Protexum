import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup , Validators  } from '@angular/forms'
import { ServiceService } from '../service/services/service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-service',
  templateUrl: './editar-service.page.html',
  styleUrls: ['./editar-service.page.scss'],
})
export class EditarServicePage implements OnInit {

// esta variebles son para redirecionar informacion

idService : any
id: string;
  // variables para editar servicios
serviceForm: FormGroup
constructor(private servicio: ServiceService , private activatedRoute:ActivatedRoute , private router: Router,
  private fb: FormBuilder) {
   this.serviceForm =  this.fb.group({
     nombre: ['', Validators.required],
     contactodelservicio: ['', Validators.required],
     telefono: ['', Validators.required],
     telefonoprotexum: ['', Validators.required],
     tipodeservicio: ['', Validators.required],
     domicilio: ['', Validators.required],
     jefedeservicio: ['', Validators.required],
     lturnodoce: ['', Validators.required],
     lturnovienti: ['', Validators.required],
     mturnodoce: ['', Validators.required],
     mturnovienti: ['', Validators.required], 
     miturnodoce: ['', Validators.required],
     miturnovienti: ['', Validators.required], 
     jturnodoce: ['', Validators.required],
     jturnovienti: ['', Validators.required], 
     vturnodoce: ['', Validators.required],
     vturnovienti: ['', Validators.required],   
     sturnodoce: ['', Validators.required],
     sturnovienti: ['', Validators.required], 
     dturnodoce: ['', Validators.required],
     dturnovienti: ['', Validators.required] 
     
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
     
      this.servicio.obtenerservice(this.id).subscribe( data => {

         console.log(data.service)
         

     let service = data.service;
     
       this.serviceForm.patchValue(service)
     
       
       
      })
   }


 }

 actualizar(){
    // recorada ponerle  y preguntar si los datos esta bien puestos
    this.servicio.Editar_S(this.id ,this.serviceForm.value ).subscribe(  ( res => {
      console.log(res.dataService);
    //  // igualo la variable idUser para que tenga los datos de id del user
       this.idService = this.id
       
      

   

      this.router.navigate(['/list-services'])
     }
    
     ))
 }

}
