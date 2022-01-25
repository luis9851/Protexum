import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  

  constructor(private servicio: LoginService, private router: Router) { }

  ngOnInit() {
 
  }

  Login(form){
    this.servicio.login(form.value).subscribe(res =>{
      console.log(res.dataUser)
      if(!res.dataUser){
       console.log("algo fallo")        
      }
     
      
      this.servicio.disparadorderol.emit({
        data: res.dataUser.nombre
      })

      this.router.navigate(['/home'])

    })

  }

}
