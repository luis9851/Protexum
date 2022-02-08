import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {tap, catchError, map} from 'rxjs/operators';
import { Observable, BehaviorSubject, pipe } from 'rxjs';
import { ClientsI } from '../models/clients';
import { ClientResponseI } from '../models/client-response';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  AUTH_SERVER: string = 'http://localhost:3001';

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


 // registrar cliente
 register(client:ClientsI ): Observable<ClientResponseI>{
  return this.http.post<ClientResponseI>(`${this.AUTH_SERVER}/api/registerclients`,
  client).pipe(tap(
    (res: ClientResponseI)=> {

    }
  ), catchError(this.handleError))
}

// me trae los datos de cliente para posterio mente modificar los datos con el metodo de editar_u
obtenerClient(id: String):Observable<any>{
  return this.http.get(`${this.AUTH_SERVER}/api/obtenerclienteA/${id}`).pipe(map((resp) => {
   return resp 
}),  catchError(this.handleError) )    
 }

//eliminar clientes
deletecliente(_id: String): Observable<ClientResponseI>{
  return this.http.delete<ClientResponseI>(`${this.AUTH_SERVER}/api/deleteclients/${_id}`).pipe(tap(
    (res: ClientResponseI)=> {
    
    }
  ), catchError(this.handleError) )
}
// actualizar los datos de cliente
Editar_C(id:any ,client:ClientsI ): Observable<ClientResponseI>{
  return this.http.put<ClientResponseI>(`${this.AUTH_SERVER}/api/updateclients/${id}`,
  client).pipe(tap(
    (res: ClientResponseI)=> {
     
    }
  ), catchError(this.handleError))
}
}
