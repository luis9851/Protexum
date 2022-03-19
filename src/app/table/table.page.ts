import { Component, OnInit, Input} from '@angular/core';
import { TableService } from '../service/table.service';
import {FormBuilder, FormControl, FormGroup , Validators  } from '@angular/forms'
import { ServiceService } from '../service/services/service.service';

import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-table',
  templateUrl: './table.page.html',
  styleUrls: ['./table.page.scss'],
})
export class TablePage implements OnInit {


 vn : boolean = false;
 t : boolean = false;
 tu : boolean = false;
 
  id: string;
  // variables para editar servicios
turnForm: FormGroup
  constructor(private servicio: TableService, private servicio0: ServiceService,  private router: Router,
    private toast: ToastController,  private activatedRoute: ActivatedRoute, private fb: FormBuilder) {
      this.turnForm =  this.fb.group({
        tlp: ['', Validators.required],
        tmp: ['', Validators.required],
        tmip: ['', Validators.required],
        tjp: ['', Validators.required],
        tvp: ['', Validators.required],
        tsp: ['', Validators.required],
        tdp: ['', Validators.required],
        tls: ['', Validators.required],
        tms: ['', Validators.required],
        tmis: ['', Validators.required],
        tjs: ['', Validators.required],
        tvs: ['', Validators.required],
        tss: ['', Validators.required],
        tds: ['', Validators.required],
        tlt: ['', Validators.required],
        tmt: ['', Validators.required],
        tmit: ['', Validators.required],
        tjt: ['', Validators.required],
        tvt: ['', Validators.required],
        tst: ['', Validators.required],
        tdt: ['', Validators.required],
        tlc: ['', Validators.required],
        tmc: ['', Validators.required],
        tmic: ['', Validators.required],
        tjc: ['', Validators.required],
        tvc: ['', Validators.required],
        tsc: ['', Validators.required],
        tdc: ['', Validators.required],
        tlq: ['', Validators.required],
        tmq: ['', Validators.required],
        tmiq: ['', Validators.required],
        
      })
     

      this.activatedRoute.params.subscribe( params => {
        this.id = params['id'];
        
      
      })

      
     }

  ngOnInit() {
      this.consultardatos()
  
    this.servicio0.disparadordedias.subscribe(data =>{
      console.log("recibiendo",data.data[28])
      // son vn = 29 t = 30 tu = 31 son para que no aprezcan en caso de que no existan esos valores 
     
      if( data.data[28] !== null  ){
        this.vn = true
        console.log("entro1", this.vn)
      }  if( data.data[29] !== null ) {
        this.t = true
        console.log("entro2",this.t)
      } if( data.data[30] !== null){
        this.tu = true
        console.log("entro3",this.tu )
      }
    

    })
   
  
  }

  consultardatos(){

    if(this.id !== null){
     
      this.servicio.obteneruser(this.id).subscribe( data => {

         console.log(data)
     let turno = data.user;
   
     
       this.turnForm.patchValue(turno)
      })
   }


 }
  Register(){
    console.log(this.turnForm.value)
  
     if(this.turnForm.value.tlp == "" || this.turnForm.value.tmp == "" || this.turnForm.value.tmip == "" ||
     this.turnForm.value.tjp == "" || this.turnForm.value.tvp == "" || this.turnForm.value.tsp == "" ||
     this.turnForm.value.tdp == ""  || this.turnForm.value.tls == "" || this.turnForm.value.tms == "" || this.turnForm.value.tmis == "" ||
     this.turnForm.value.tjs == "" || this.turnForm.value.tvs == "" || this.turnForm.value.tss == "" ||
     this.turnForm.value.tds == "" || this.turnForm.value.tlt == "" || this.turnForm.value.tmt == "" || this.turnForm.value.tmit == "" ||
     this.turnForm.value.tjt == "" || this.turnForm.value.tvt == "" || this.turnForm.value.tst == "" ||
     this.turnForm.value.tdt == "" || this.turnForm.value.tlc == "" || this.turnForm.value.tmc == "" || this.turnForm.value.tmic == "" ||
     this.turnForm.value.tjc == "" || this.turnForm.value.tvc == "" || this.turnForm.value.tsc == "" ||
     this.turnForm.value.tdc == "" ){
       this.FaltanDatos()
     } 
     else { 
   // los datos de el elemento
   this.servicio.registrar(this.id,this.turnForm.value).subscribe( (res => {
  
   this.exito()

   this.router.navigate(['/list-services'])
       
   }))
  
  }
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
    



