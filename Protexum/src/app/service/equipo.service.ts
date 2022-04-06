import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {tap, catchError, map} from 'rxjs/operators';
import { Observable, BehaviorSubject, pipe } from 'rxjs';
import { throwError } from 'rxjs';
import { EquipI } from '../models/equip';
import { EquipResponseI } from '../models/equip-response';
import { JwtResponseI } from '../models/jwt-response';
@Injectable({
  providedIn: 'root'
})
export class EquipoService {


  AUTH_SERVER: string = 'https://ionic-proyect.herokuapp.com';
 // AUTH_SERVER: string = 'http://localhost:3001';

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

 // registrar Equipo
 registerE(id:string,equip:EquipI ): Observable<EquipResponseI>{
  return this.http.put<EquipResponseI>(`${this.AUTH_SERVER}/api/registerequips/${id}`,
  equip, ).pipe(tap(
    (res: EquipResponseI)=> {
      if(res){
       
       
      }
    }
  ), catchError(this.handleError))
}

// para agregar el id de equipo y ponerselo al servicio
actualizarIdUsuario( id:String, idservicio:string ): Observable<JwtResponseI>{
  return this.http.put<JwtResponseI>(`${this.AUTH_SERVER}/api/idimage/idservicio/${id}`,
  {equiporecibido:idservicio}).pipe(tap(
    (res: JwtResponseI)=> {
    
    }
  ),catchError(this.handleError) )
}
}