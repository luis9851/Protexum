import { Injectable, Output,EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserI } from '../models/user';
import { JwtResponseI } from '../models/jwt-response';
import {tap} from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { imageI } from '../models/images';

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

  constructor(private http: HttpClient) { }

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
    ))
  }
  // AgregarIdimagen( idUser:any ,fileUrl: any ){  
  //   console.log(fileUrl)
  //   return this.http.put(`${this.AUTH_SERVER}/api/idimage/image/${idUser}`,fileUrl)
   
  // }
  AgregarIdimagen(idUser:any, fileUrl:String ): Observable<JwtResponseI>{
    return this.http.put<JwtResponseI>(`${this.AUTH_SERVER}/api/idimage/image/${idUser}`,
    {url:fileUrl}).pipe(tap(
      (res: JwtResponseI)=> {
      
      }
    ))
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

  uploadImage( name: string , file : File) : Observable<imageI>{
    const form1 = new FormData()
    form1.append('name', name);
    form1.append('file',file, 'form-data');
    
    return this.http.post<imageI>( `${this.AUTH_SERVER}/api/upload`, 
    form1).pipe(tap(
      // aqui ya la variable la mandas a llamar para poder usarla
      (res: imageI)=> {
        
        
      }
    ))
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
