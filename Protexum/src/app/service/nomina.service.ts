
import { Observable, of, pipe } from 'rxjs';
import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import { throwError } from 'rxjs';
import * as XLSX from 'xlsx'
import { HttpClient, HttpParams, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { PlistaResponseI } from '../models/paselista-response';
import { JwtResponseI } from '../models/jwt-response';
const EXCEL_TYPE= 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset=UTF-8';

const EXCEL_EXT = '.xlsx';

@Injectable({
  providedIn: 'root'
})
export class NominaService {
  apiUrl:string;
  constructor(private http: HttpClient ) { 
    
 //  this.apiUrl ="https://ionic-proyect.herokuapp.com/api/";
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

  getobtenerservices(): Observable<any> {
    let url = `${this.apiUrl}idimage/consultaservice`;
    return this.http.get(url).pipe(map((resp) => {
       return resp 
    }),  catchError(this.handleError) )    
  }
  
  //cambiar diasasistidos
  actualizar_diasasistidos(id:any ,idu:string ): Observable<PlistaResponseI>{
    
    return this.http.put<PlistaResponseI>(`${this.apiUrl}idimage/paselista/${id}`,
    {turnossemana:idu }).pipe(tap(
      (res: PlistaResponseI)=> {
       
      }
    ), catchError(this.handleError))
  }

//agregar la imagen en usuario
Agregardiaasistido(idUser:any, diasasistidos:number): Observable<JwtResponseI>{
  return this.http.put<JwtResponseI>(`${this.apiUrl}idimage/asistencia/${idUser}`,
  {diasasistidos:diasasistidos}).pipe(tap(
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
  


 private saveAsExcel(buffer:any , fileName:string) {
    const data: Blob = new Blob([buffer], {type:EXCEL_TYPE});
   
    FileSaver.saveAs(data,fileName  + new Date().getDate() + '-' +new Date().getMonth()+ '-' + new Date().getFullYear()  + EXCEL_EXT);
  }
  
}


