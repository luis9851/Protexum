import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup , Validators  } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service/services/service.service';
import { Equip } from '../models/equips/equip';
@Component({
  selector: 'app-editar-equip',
  templateUrl: './editar-equip.page.html',
  styleUrls: ['./editar-equip.page.scss'],
})
export class EditarEquipPage implements OnInit {

// esta variebles son para redirecionar informacion

id: string;
    // variables para editar servicios
   EquipForm: FormGroup
constructor(private servicio: ServiceService , private activatedRoute:ActivatedRoute , private router: Router,
  private fb: FormBuilder) {
   this.EquipForm =  this.fb.group({
    celular: ['', Validators.required],
    dcelular: ['', Validators.required],
    radio: ['', Validators.required],
    dradio: ['', Validators.required],
    lamparas: ['', Validators.required],
    dlamparas: ['', Validators.required],
    fornitura: ['', Validators.required],
    dfornitura: ['', Validators.required],
    tonfa: ['', Validators.required],
    dtonfa: ['', Validators.required],
    gas: ['', Validators.required], 
    dgas: ['', Validators.required],
    teaser: ['', Validators.required], 
    dteaser: ['', Validators.required],
    impermeable: ['', Validators.required], 
    dimpermeable: ['', Validators.required],
    espejoderevision: ['', Validators.required],   
    despejoderevision: ['', Validators.required],
    detectordemetales: ['', Validators.required], 
    ddetectordemetales: ['', Validators.required],
    mazo: ['', Validators.required],
    dmazo: ['', Validators.required], 
    botasimpermeables: ['', Validators.required],
    dbotasimpermeables: ['', Validators.required],   
    bicicleta: ['', Validators.required],
    dbicicleta: ['', Validators.required], 
    patrulla: ['', Validators.required],
    dpatrulla: ['', Validators.required],
    rondinero: ['', Validators.required],
    drondinero: ['', Validators.required], 
   
     
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
     
      this.servicio.obtenerequip(this.id).subscribe( data => {

         console.log(data.equip)
         

     let Equip = data.equip;
     
       this.EquipForm.patchValue(Equip)
     
       
       
      })
   }
   


 }
 actualizar(){
  // recorada ponerle  y preguntar si los datos esta bien puestos
  this.servicio.Editar_Se(this.id ,this.EquipForm.value ).subscribe(  ( res => {
    console.log(res.dataEquip);
  
     
    

 

    this.router.navigate([''])
   }
  
   ))
}

}
