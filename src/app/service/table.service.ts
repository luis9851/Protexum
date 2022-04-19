import { Injectable } from '@angular/core';
import { Observable, of, pipe } from 'rxjs';
import { HttpClient, HttpParams, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { PListaI } from 'src/app/models/paselista';
import { PlistaResponseI } from 'src/app/models/paselista-response';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class TableService {

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


    // aqui empieza lo del modulo de turn
   registrar(id:string, turno:PListaI  ): Observable<PlistaResponseI>{
    return this.http.put<PlistaResponseI>(`${this.apiUrl}idimage/turno/${id}`,
    turno).pipe(tap (
      (res:PlistaResponseI)=>{


      }
    ), catchError(this.handleError))
  }
      // me trae los datos de turno para posterio mente para agregar un user
      obteneruser(id: String):Observable<any>{
        return this.http.get(`${this.apiUrl}idimage/consulta/${id}`).pipe(map((resp) => {
         return resp 
      }),  catchError(this.handleError) )    
       }

         //actualizar el id 
  
   actualizar_usuarioid(id:any ,idu:string ): Observable<PlistaResponseI>{
    
    return this.http.put<PlistaResponseI>(`${this.apiUrl}idimage/turno/${id}`,
    {turnossemana:idu }).pipe(tap(
      (res: PlistaResponseI)=> {
       
      }
    ), catchError(this.handleError))
  }
}
