// ESTE CLASE DE SERVICIO QUEDA PENDIENTE PARA IMPLEMENTARSE JUNTO A AUTENTICACION CON JWT

import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private authenticationService: AuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    var currentUser = this.authenticationService.authenticatedUser;
    if(currentUser && currentUser.accesToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.accesToken}`
        }
      })
    }
    console.log("Interceoptor esta corriendo " + JSON.stringify(currentUser));
    
    return next.handle(request);
  }
}
