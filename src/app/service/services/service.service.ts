import { Injectable, Output,EventEmitter } from '@angular/core';
import { Observable, of, pipe } from 'rxjs';
import { HttpClient, HttpParams, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ServiceI } from 'src/app/models/services';
import { EquipI } from 'src/app/models/equip';
import { ServiceResponseI } from 'src/app/models/service-response';
import { ClientResponseI } from 'src/app/models/client-response';
import { EquipResponseI } from 'src/app/models/equip-response';
import { Services } from '../../models/services/services';
const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  
  @Injectable({
    providedIn: 'root'
  })
  export class ServiceService {
    apiUrl:string;
    @Output() disparadordedias: EventEmitter<any> = new EventEmitter();
    
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
  
    private extractData(res: Response){
      let body = res;
      return body || {};
    }
    // trae los usuarios de la base de datos al home
    getobtener(): Observable<any> {
      let url = `${this.apiUrl}idimage/consulta`;
      return this.http.get(url).pipe(map((resp) => {
         return resp 
      }),  catchError(this.handleError) )    
    }


    // trea los clientes de la base de datos al list-client
     getobtenerclients(): Observable<any> {
      let url = `${this.apiUrl}idimage/consultaclients`;
      return this.http.get(url).pipe(map((resp) => {
         return resp 
      }),  catchError(this.handleError) )    
    }

// trea los clientes de la base de datos al list-client
getobtenerservices(): Observable<any> {
  let url = `${this.apiUrl}idimage/consultaservice`;
  return this.http.get(url).pipe(map((resp) => {
     return resp 
  }),  catchError(this.handleError) )    
}


  // obtiene la info del usuario para ponerlo en el perfil
    getobtenerid(id: string): Observable<any> {
      let url = `${this.apiUrl}idimage/consulta/${id}`;
      return this.http.get(url).pipe(map((resp) => {
         return resp 
      }),  catchError(this.handleError) )    
    }

    // obtiene la info del cliente para ponerlo en el perfil
     getobteneridcliente(id: string): Observable<any> {
      let url = `${this.apiUrl}idimage/consultaclients/${id}`;
      return this.http.get(url).pipe(map((resp) => {
         return resp 
      }),  catchError(this.handleError) )    
    }
     

    

   

      // obtiene la info del servicio para ponerlo en el perfil
      getobteneridservice(id: string): Observable<any> {
        let url = `${this.apiUrl}idimage/consultaservice/${id}`;
        return this.http.get(url).pipe(map((resp) => {
           return resp 
        }),  catchError(this.handleError) )    
      }


// usar el buscador de usuarios
    getSearch(search: string): Observable<any> {
      let url = `${this.apiUrl}idimage/buscar/${search}`;
      return this.http.get(url).pipe(map((resp) => {
         return resp 
      }),  catchError(this.handleError) )  
        
    }
  



    // aqui empieza lo del modulo de servicio
    registrarS(id:string,service:ServiceI  ): Observable<ServiceResponseI>{
      return this.http.put<ServiceResponseI>(`${this.apiUrl}registerservice/${id}`,
      service).pipe(tap (
        (res:ServiceResponseI)=>{

        }
      ), catchError(this.handleError))
    }


    // me trae los datos de service para posterio mente modificar los datos con el metodo de Editar_S
  obtenerservice(id: String):Observable<any>{
    return this.http.get(`${this.apiUrl}obtenerservice/${id}`).pipe(map((resp) => {
     return resp 
  }),  catchError(this.handleError) )    
   }

     // me trae los datos de equipo para posterio mente modificar los datos con el metodo de Editar_Se
  obtenerequip(id: String):Observable<any>{
 
    return this.http.get(`${this.apiUrl}obtenerequips/${id}`).pipe(map((resp) => {
     return resp 
  }),  catchError(this.handleError) )    
   }

   //eliminar servicio
   deleteservice(_id: String): Observable<ServiceResponseI>{
    return this.http.delete<ServiceResponseI>(`${this.apiUrl}deleteservice/${_id}`).pipe(tap(
      (res: ServiceResponseI)=> {
      
      }
    ), catchError(this.handleError) )
  }

  // actualizar los datos de servicio
  Editar_S(id:any ,service:ServiceI ): Observable<ServiceResponseI>{
    return this.http.put<ServiceResponseI>(`${this.apiUrl}updateservice/${id}`,
    service).pipe(tap(
      (res: ServiceResponseI)=> {
       
      }
    ), catchError(this.handleError))
  }


  // actualizar los datos de equipo
  Editar_Se(id:any ,equip:EquipI ): Observable<EquipResponseI>{
    return this.http.put<EquipResponseI>(`${this.apiUrl}updateequips/${id}`,
    equip).pipe(tap(
      (res: EquipResponseI)=> {
       
      }
    ), catchError(this.handleError))
  }

  //actualizar el id de servicio en Client
  
  actualizar_servicioid(id:any ,idservicio:string ): Observable<ClientResponseI>{
    return this.http.put<ClientResponseI>(`${this.apiUrl}idimage/idClienteservicio/${id}`,
    {servicios:idservicio }).pipe(tap(
      (res: ClientResponseI)=> {
       
      }
    ), catchError(this.handleError))
  }

  //agregar el id de usuarios a servicios
AgregarGuardias(id:any, Guardias:String): Observable<ServiceResponseI>{
  return this.http.put<ServiceResponseI>(`${this.apiUrl}idimage/idGuardia/${id}`,
  {Guardias:Guardias}).pipe(tap(
    (res: ServiceResponseI)=> {
    
    }
  ),catchError(this.handleError) )
}

}

   

    

  