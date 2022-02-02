import { Injectable } from '@angular/core';
import { Observable, of, pipe } from 'rxjs';
import { HttpClient, HttpParams, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { Users } from 'src/app/models/users/users';
import { JwtResponseI } from '../../models/jwt-response';
import { UserI } from '../../models/user';


const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  
  @Injectable({
    providedIn: 'root'
  })
  export class ServiceService {
    apiUrl:string;
  
    constructor(private http: HttpClient ) { 
      console.log("Servicio listo...");
      this.apiUrl ="http://localhost:3001/api/";
    }
  
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
    
    getobtener(): Observable<any> {
      let url = `${this.apiUrl}idimage/consulta`;
      return this.http.get(url).pipe(map((resp) => {
         return resp 
      }),  catchError(this.handleError) )    
    }
    
    // getUsers():Observable<Users[]>{
    //     console.log('getUsers');
    //     let url = `${this.apiUrl}idimage/consulta`;
    //     return this.http.get<JwtResponseI>(url, httpOptions).pipe(  map(({users}) => users ),
    //     catchError(this.handleError)
    //     );
    // }


    getobtenerid(id: string): Observable<any> {
      let url = `${this.apiUrl}idimage/consulta/${id}`;
      return this.http.get(url).pipe(map((resp) => {
         return resp 
      }),  catchError(this.handleError) )    
    }

    getSearch(search: string): Observable<any> {
      let url = `${this.apiUrl}idimage/buscar/${search}`;
      return this.http.get(url).pipe(map((resp) => {
         return resp 
      }),  catchError(this.handleError) )    
    }



}

   

    

  