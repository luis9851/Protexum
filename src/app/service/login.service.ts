import { Injectable, Output,EventEmitter } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserI } from '../models/user';
import { JwtResponseI } from '../models/jwt-response';
import {tap, catchError, map} from 'rxjs/operators';
import { Observable, BehaviorSubject, pipe } from 'rxjs';
import { imageI } from '../models/images';
import { throwError } from 'rxjs';
import { ClientResponseI } from '../models/client-response';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  AUTH_SERVER: string = 'http://localhost:3001';
  authSubject = new BehaviorSubject(false);
  private token: string;
  idimage : any = []
 @Output() disparadorderol: EventEmitter<any> = new EventEmitter();
 @Output() disparadoridmage: EventEmitter<any> = new EventEmitter();
 
 @Output() disparadoralertas: EventEmitter<any> = new EventEmitter();
 @Output() disparadoractualizadorId: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error(error.error.message);
    }

    else{
      console.error(`Error status: ${error.status}, error: ${error.error}`);
    }
    return throwError( 'Hubo un error en la aplicacion. Verificar logs');
  }

// me trae los datos de usuario para posterio mente modificar los datos con el metodo de editar_u
  obtenerUser(id: String):Observable<any>{
   return this.http.get(`${this.AUTH_SERVER}/api/obtener/${id}`).pipe(map((resp) => {
    return resp 
 }),  catchError(this.handleError) )    
  }

// registrar usuario
  register(user:UserI ): Observable<JwtResponseI>{
    return this.http.post<JwtResponseI>(`${this.AUTH_SERVER}/api/register`,
    user).pipe(tap(
      (res: JwtResponseI)=> {
        if(res){
          //guardar token
          this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
         
        }
      }
    ), catchError(this.handleError))
  }
  Editar_U(id:any ,user:UserI ): Observable<JwtResponseI>{
    return this.http.put<JwtResponseI>(`${this.AUTH_SERVER}/api/update/${id}`,
    user).pipe(tap(
      (res: JwtResponseI)=> {
       
      }
    ), catchError(this.handleError))
  }

  AgregarIdimagen(idUser:any, fileUrl:String): Observable<JwtResponseI>{
    return this.http.put<JwtResponseI>(`${this.AUTH_SERVER}/api/idimage/image/${idUser}`,
    {url:fileUrl}).pipe(tap(
      (res: JwtResponseI)=> {
      
      }
    ),catchError(this.handleError) )
 }


  
  
 // actualizar la imagen de usuario
 actualizarimagen(id:any, fileUrl:String ): Observable<JwtResponseI>{
  return this.http.put<JwtResponseI>(`${this.AUTH_SERVER}/api/idimage/actualizarimg/${id}`,
  {url:fileUrl}).pipe(tap(
    (res: JwtResponseI)=> {
    
    }
  ),catchError(this.handleError) )
}
//eliminar usuarios
 eliminarusuario(_id: String): Observable<JwtResponseI>{
  return this.http.delete<JwtResponseI>(`${this.AUTH_SERVER}/api/delete/${_id}`).pipe(tap(
    (res: JwtResponseI)=> {
    
    }
  ), catchError(this.handleError) )
}
 
// enviar correo 
enviarcorreo(user: UserI): Observable<JwtResponseI>{
  return this.http.post<JwtResponseI>(`${this.AUTH_SERVER}/api/olvidastecontrasena`,
  user).pipe(tap(
    (res: JwtResponseI)=>{

    }
  ),catchError(this.handleError) )
}

// cambiar contraseña 
cambiarcontraseña(token:String, user:UserI): Observable<JwtResponseI>{
  return this.http.put<JwtResponseI>(`${this.AUTH_SERVER}/api/crearcontrasena/${token}`,
  {contrasena:user}).pipe(tap(
    (res: JwtResponseI)=>{

    }
  ),catchError(this.handleError) )
}


  // login 
  login(user:UserI): Observable<JwtResponseI>{
    return this.http.post<JwtResponseI>(`${this.AUTH_SERVER}/api/login`,
    user).pipe(tap(
      (res: JwtResponseI)=> {
        
        if(res){
          //guardar token
          this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
          
          
         

        }
      }
    ))
    
  }




// subir la imagen
  uploadImage( name: string , file : File) : Observable<imageI>{
    const form1 = new FormData()
    form1.append('name', name);
    form1.append('file',file, 'form-data');
    
    return this.http.post<imageI>( `${this.AUTH_SERVER}/api/upload`, 
    form1).pipe(tap(
      // aqui ya la variable la mandas a llamar para poder usarla
      (res: imageI)=> {
        
        
      }
    ), catchError(this.handleError))
    }
     
  logout(): void{
    this.token ='';
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRES_IN")
  }
  private saveToken(token: string, expiresIn: string): void {
    localStorage.setItem("ACCESS_TOKEN", token);
    localStorage.setItem("EXPIRES_IN", expiresIn);
    this.token = token;
    
  }
  private getToken():string{
    if(!this.token){
      this.token =localStorage.getItem("ACCESS_TOKEN");
    }
    return this.token;
  }
}
