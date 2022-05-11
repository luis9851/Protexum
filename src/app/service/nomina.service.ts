
import { Observable, of, pipe } from 'rxjs';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpClient, HttpParams, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { PlistaResponseI } from '../models/paselista-response';
import { JwtResponseI } from '../models/jwt-response';




@Injectable({
  providedIn: 'root'
})
export class NominaService {
  apiUrl:string;
  constructor(private http: HttpClient ) { 
    
   //this.apiUrl ="https://ionic-proyect.herokuapp.com/api/";
  this.apiUrl ="http://localhost:3001/api/";
  }

 //detector de errores
 private handleError(error: HttpErrorResponse){
  if(error.error instanceof ErrorEvent){
    console.error(error.error.message);
  }
  else{
    console.error(`Error status: ${error.status}, error: ${error.error}`);
  }
  return throwError( 'Hubo un error en la aplicacion. Verificar logs');
}

  //cambiar diasasistidos
  actualizar_diasasistidos(id:any ,idu:string ): Observable<PlistaResponseI>{
    
    return this.http.put<PlistaResponseI>(`${this.apiUrl}paselista/${id}`,
    {turnossemana:idu }).pipe(tap(
      (res: PlistaResponseI)=> {
       
      }
    ), catchError(this.handleError))
  }

//agregar dias
Agregardiaasistido(idUser:any, diasasistidos:Number, dinerofaltante:Number ): Observable<JwtResponseI>{
  return this.http.put<JwtResponseI>(`${this.apiUrl}paselista/${idUser}`,
  {diasasistidos:diasasistidos, dinerofaltante:dinerofaltante }).pipe(tap(
    (res: JwtResponseI)=> {
    
    }
  ),catchError(this.handleError) )
}

//agregar dias
AgregarMonto(idUser:any, Montoapagartotal:Number ): Observable<JwtResponseI>{
  return this.http.put<JwtResponseI>(`${this.apiUrl}idimage/actualizarmonto/${idUser}`,
  { montoapagartotal:Montoapagartotal }).pipe(tap(
    (res: JwtResponseI)=> {
    
    }
  ),catchError(this.handleError) )
}

 // obtiene la info del usuario para usarlo
 getobtenerid(id: string): Observable<any> {
  let url = `${this.apiUrl}idimage/consulta/${id}`;
  return this.http.get(url).pipe(map((resp) => {
     return resp 
  }),  catchError(this.handleError) )    
}
  




  
}


