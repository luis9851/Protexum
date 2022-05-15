import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { LoginService } from '../service/login.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor{


constructor(private servicio:LoginService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       return next.handle(req).pipe(
           catchError((err) => {
             
               if(
                   [401, 403, 404, 409].indexOf(err.status) !== -1
               ){
                 
                 this.servicio.disparadoralertas.emit({
                     data: err.status
                 })

               }
               return throwError(err)
           })
       )
    }

}