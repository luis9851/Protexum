import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup , Validators  } from '@angular/forms'
import { LoginService } from '../service/login.service';
import { UserI } from '../models/user';

import { imageI } from '../models/images';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-editar-user',
  templateUrl: './editar-user.page.html',
  styleUrls: ['./editar-user.page.scss'],
})
export class EditarUserPage implements OnInit {
  // es para agregar una imagem
  usuario : UserI;
  imageForm! : FormGroup
  file: any;

// esta variebles son para redirecionar informacion
  idimage: imageI
  idUser : any
  id: string;

// variables para editar usuario
userForm: FormGroup
//imagen del usuario
urlfile:any=[];
   

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
       cdeplayera: ['', Validators.required],
       ddeplayera: ['', Validators.required],
       cdepantalon: ['', Validators.required],
       ddepantalon: ['', Validators.required],
       cdebotas: ['', Validators.required],
       ddebotas: ['', Validators.required],
       cdecachucha: ['', Validators.required],
       ddecachucha: ['', Validators.required],
       cdechamarra: ['', Validators.required],
       ddechamarra: ['', Validators.required],
       cdechaleco: ['', Validators.required],
       ddechaleco: ['', Validators.required],
       cdelentes: ['', Validators.required],
       ddelentes: ['', Validators.required],
       pensionado: ['', Validators.required],
       niveldeescolaridad: ['', Validators.required],
       contrasena: ['', Validators.required],
       
     })

     this.activatedRoute.params.subscribe( params => {
      this.id = params['id'];
     
    })

     }



  ngOnInit() {
    
    this.imageForm = new FormGroup({
      name: new FormControl(null,Validators.required),
      file: new FormControl(null, Validators.required)
    })
  
   this.Editar();
  }


// este metodo es para mandar a traer los datos del usuario
  Editar(){

     if(this.id !== null){
      
       this.servicio.obtenerUser(this.id).subscribe( data => {

          console.log(data.user)
          this.urlfile = data.user.fileUrl

      let user = data.user;
      
        this.userForm.patchValue(user)
      
    
        
       })
    }


  }

  actualizar(){
    console.log(this.userForm)
 // recorada ponerle una alerta para cuando actualizar las imagenes y preguntar si los datos esta bien puestos
   


     this.servicio.Editar_U(this.id ,this.userForm.value ).subscribe(  ( res => {
      console.log(res.dataUser);
    //  // igualo la variable idUser para que tenga los datos de id del user
       this.idUser = this.id
       
      

   

      this.router.navigate(['/home'])
     }
    
     ))
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
 
 
   updateurl2(){
     this.servicio. disparadoridmage.subscribe(data =>{
      console.log(this.id)
     
     //  aqui estoy mandando a llamar la funcion para id
    this.servicio.actualizarimagen( this.id,data.data).subscribe((res => {

      console.log(res)
   
   } ))
      
     })
       
 
   }
 
   onSubmit(){
     
     const form = this.imageForm;
   
     form.value.name = "Foto"
    
       this.servicio.uploadImage(form.value.name, this.file)
       .subscribe(res => {
         this. updateurl2()
       
         this.servicio.disparadoridmage.emit({
           data: res.dataimage.fileUrl
         })
 
         
         this.imageForm = new FormGroup({
           name : new FormControl (null),
           file: new FormControl(null)
          
         })
        
         
           
         
       })
     
 
   }

}