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

 // registrar Equipo
 registerE(equip:EquipI ): Observable<EquipResponseI>{
  return this.http.post<EquipResponseI>(`${this.AUTH_SERVER}/api/registerequips`,
  equip, ).pipe(tap(
    (res: EquipResponseI)=> {
      if(res){
       
       
      }
    }
  ), catchError(this.handleError))
}

// para agregar el id de usuario y ponerselo al equipo
actualizarIdUsuario( id:String, idClient:string ): Observable<JwtResponseI>{
  return this.http.put<JwtResponseI>(`${this.AUTH_SERVER}/api/idimage/idClient/${id}`,
  {idClient:idClient}).pipe(tap(
    (res: JwtResponseI)=> {
    
    }
  ),catchError(this.handleError) )
}
}
