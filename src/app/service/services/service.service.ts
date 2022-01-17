import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { Users } from 'src/app/models/users/users';


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
      this.apiUrl ="http://localhost:3000/api/";
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
    
    getUsers():Observable<Users[]>{
        console.log('getUsers');
        let url = `${this.apiUrl}users`;
        return this.http.get<Users[]>(url, httpOptions).pipe(
        catchError(this.handleError)
        );
    }

  }