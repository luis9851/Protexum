import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup , Validators  } from '@angular/forms'
import { LoginService } from '../service/login.service';
import { UserI } from '../models/user';
import { NgForm } from '@angular/forms';
import { imageI } from '../models/images';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  usuario : UserI;
  imageForm! : FormGroup
  file: any;
  // aqui esta la variabale para poder usarla en todo el ts

  idimage: imageI
  idUser : any

  constructor(private servicio: LoginService) { }

  ngOnInit() {
    this.imageForm = new FormGroup({
      name: new FormControl(null,Validators.required),
      file: new FormControl(null, Validators.required)
    })

    
  }


  Register(form : NgForm){
    this.onSubmit()
    
    

    this.servicio.register(form.value).subscribe( (res => {
    
    //  this.form2.value = form.value.;
      console.log(res.dataUser);
      // igualo la variable idUser para que tenga los datos de id del user
      this.idUser = res.dataUser.id
      

       this.updateurl(this.idUser)
    

      
    }))
    
   
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
    this.servicio. disparadoridmage.subscribe(data =>{
     

    //  aqui estoy mandando a llamar la funcion para id
   this.servicio.AgregarIdimagen( this.idUser,data.data).subscribe((res => {
  
  } ))
     
    })
      

  }

  onSubmit(){
    
    const form = this.imageForm;
  
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
 

}
