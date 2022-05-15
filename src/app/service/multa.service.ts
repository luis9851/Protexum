import { Injectable } from '@angular/core';
import { Observable, of, pipe } from 'rxjs';
import { HttpClient, HttpParams, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Multa, MultaClass, Multaid } from '../models/multas/multas';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class MultaService {

  apiUrl:string;
  
  constructor(private http: HttpClient ) { 
  
   // this.apiUrl ="https://ionic-proyect.herokuapp.com/api/";
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


       // aqui empieza lo del modulo de multa
   registrar( multa: Multa, Guardias:string ): Observable<Multa>{
    return this.http.put<Multa>(`${this.apiUrl}agregarmulta/${Guardias}`,
    multa ).pipe(tap (
      (res:Multa)=>{

      }
    ), catchError(this.handleError))
  }
         // aqui empieza lo del modulo de multa
         agregarmultasaguardias( id:string, multas:string ): Observable<Multaid>{
         console.log(id)
         console.log(multas)
          return this.http.put<Multaid>(`${this.apiUrl}idimage/idmultasaguardias/${id}`,
          {multas:multas} ).pipe(tap (
            (res:Multaid)=>{
      
            }
          ), catchError(this.handleError))
        }

        //agregar total de dinero 
      AgregartotalM(id:string, multaapagar: Number ): Observable<Multaid>{
      return this.http.put<Multaid>(`${this.apiUrl}idimage/actualizarmontomulta/${id}`,
      {multaapagar:multaapagar}).pipe(tap(
      (res: Multaid)=> {
    
      }
      ),catchError(this.handleError) )
      }
}
