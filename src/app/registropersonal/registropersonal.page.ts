import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl, FormGroup , Validators  } from '@angular/forms'
import { LoginService } from '../service/login.service';
import { UserI } from '../models/user';
import { NgForm } from '@angular/forms';
import { imageI } from '../models/images';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registropersonal',
  templateUrl: './registropersonal.page.html',
  styleUrls: ['./registropersonal.page.scss'],
})
export class RegistropersonalPage implements OnInit {
 //datetime
 fechaNaci: Date = new Date();


 usuario : UserI;
 imageForm! : FormGroup
 file: any;
 // aqui esta la variabale para poder usarla en todo el ts
 idimage: imageI
 idUser : any
 id: string;
 
 constructor(private servicio: LoginService, private activatedRoute:ActivatedRoute , private router: Router,
  private toast: ToastController) { }

  ngOnInit() {
    this.imageForm = new FormGroup({
      name: new FormControl(null,Validators.required),
      file: new FormControl(null, Validators.required)
    })
    this.activatedRoute.params.subscribe( params => {
      this.id = params['id'];
     
     
    })

    
  }
  cambioFecha(event){
    console.log(event)
  }

  Register(form : NgForm){
   
    
      if(form.value.apellidos == "" || form.value.contrasena == "" || form.value.correoelectronico == "" || 
      form.value.curp == "" || form.value.domicilio == "" || form.value.estadocivil == "" || form.value.fechadeentrada == ""  ||
      form.value.fechadenacimiento == "" || form.value.niveldeescolaridad == "" || form.value.nombre == "" || form.value.nsegurosocial == "" ||
      form.value.pensionado == "" || form.value.rfc == "" || form.value.rol == "" || form.value.cdeplayera == "" || form.value.ddeplayera == "" ||
      form.value.cdepantalon == "" || form.value.ddepantalon == "" || form.value.cdebotas == "" || form.value.ddebotas == "" ||
      form.value.cdecachucha == "" || form.value.ddecachucha == "" ||   form.value.cdechamarra == "" || form.value.ddechamarra == "" ||
      form.value.cdechaleco == "" || form.value.ddechaleco == "" ||       form.value.cdelentes == "" || form.value.ddelentes == "" ||
       form.value.telefono == "" || form.value.telefonoadicional == "" || form.value.sueldo == "" ){ 
  
       this.FaltanDatos()
       
      
      }  else {        
               // pasa subir la imagem
                 this.onSubmit()


                 // los datos de el elemento
                 this.servicio.register(form.value).subscribe( (res => {
    
                 this.exito()
                 console.log(res.dataUser);
                 // igualo la variable idUser para que tenga los datos de id del user
                this.idUser = res.dataUser.id
                 
              
                 console.log(this.idUser)
                   this.updateurl(this.idUser)


               
                     this.router.navigate(['/main']);
      
            
        
                
                 }))

  
     }
    
   
  }
  onFileChange(event: any){
    
  
   if(event.target.files && event.target.files.length > 0 ){
     const file = event.target.files[0];
     if(file.type.includes("image")){
       const reader = new FileReader()
       reader.readAsDataURL(file);
       

       this.file = file;
       
       console.log(file)
     }else{
       console.log("there was an error")
     }
   }
  }


  updateurl(_idUser: any){
    this.servicio.disparadoridmage.subscribe(data =>{
     

    //  aqui estoy mandando a llamar la funcion para id
   this.servicio.AgregarIdimagen( this.idUser,data.data).subscribe((res => {
  
  } ))
     
    })
      

  }

  onSubmit(){
   
     
    const form = this.imageForm;

    console.log(form)
    
    form.value.name = "Foto"
   
      this.servicio.uploadImage(form.value.name, this.file)
      .subscribe(res => {
        
      
        this.servicio.disparadoridmage.emit({
          data: res.dataimage.fileUrl
          
        })

        
        this.imageForm = new FormGroup({
          name : new FormControl (null),
          file: new FormControl(null)
         
        })
       
        
        
      })
    

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