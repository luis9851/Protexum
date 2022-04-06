import { Injectable } from '@angular/core';
import { Observable, of, pipe } from 'rxjs';
import { HttpClient, HttpParams, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { BorrowingI } from '../models/borrowing';
import { BorrowingResponseI } from '../models/borrowing-response';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class BorrowingService {
  apiUrl:string;
  
  constructor(private http: HttpClient ) { 
  
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

   // aqui empieza lo del modulo de prestamo
   registrar(id:string, prestamo:BorrowingI  ): Observable<BorrowingResponseI>{
    return this.http.put<BorrowingResponseI>(`${this.apiUrl}registerprestamo/${id}`,
    prestamo).pipe(tap (
      (res:BorrowingResponseI)=>{

      }
    ), catchError(this.handleError))
  }
   //actualizar el id de prestamo a usuario
  
   actualizar_usuarioid(id:any ,idprestamo:string ): Observable<BorrowingResponseI>{
    
    return this.http.put<BorrowingResponseI>(`${this.apiUrl}idimage/idUserprestamo/${id}`,
    {prestamos:idprestamo }).pipe(tap(
      (res: BorrowingResponseI)=> {
       
      }
    ), catchError(this.handleError))
  }
     // me trae los datos de user para posterio mente para agregar un prestamo
     obteneruser(id: String):Observable<any>{
      return this.http.get(`${this.apiUrl}idimage/consultap/${id}`).pipe(map((resp) => {
       return resp 
    }),  catchError(this.handleError) )    
     }

      //Eliminar prestamos pagados
  deletePrestamos(_id: String): Observable<BorrowingResponseI>{
    return this.http.delete<BorrowingResponseI>(`${this.apiUrl}/api/deleteprestamo/${_id}`).pipe(tap(
      (res: BorrowingResponseI)=> {
      
      }
    ), catchError(this.handleError) )
  }

   // me trae los datos de prestamo para editarlos
   obtenerPrestamos(id: String):Observable<any>{
    return this.http.get(`${this.apiUrl}obtenerprestamo/${id}`).pipe(map((resp) => {
     return resp 
  }),  catchError(this.handleError) )    
   }
  // actualizar los datos de prstamos
  Editar_P(id:any ,prestamo:BorrowingI ): Observable<BorrowingResponseI>{
    return this.http.put<BorrowingResponseI>(`${this.apiUrl}/api/updateprestamo/${id}`,
    prestamo).pipe(tap(
      (res: BorrowingResponseI)=> {
       
      }
    ), catchError(this.handleError))
  }
      // obtiene la info del prestamo para ponerlo en el perfil
      getobtenerprestamo(id: string): Observable<any> {
        let url = `${this.apiUrl}idimage/consultaPrestamo/${id}`;
        return this.http.get(url).pipe(map((resp) => {
           return resp 
        }),  catchError(this.handleError) )    
      }
}