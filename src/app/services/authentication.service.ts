// ESTE CLASE DE SERVICIO QUEDA PENDIENTE PARA IMPLEMENTARSE JUNTO A AUTENTICACION CON JWT

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  url: string = "http://localhost:8080/login/";
  currentUserSubject: BehaviorSubject<any>; 

  constructor(private httpClient: HttpClient) { 
    console.log("El servicio autenticacion esta corriendo");
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'));
  }

  Login(credentials: any): Observable<any> {
    return this.httpClient.post(this.url, credentials).pipe(map(data => {
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      this.currentUserSubject.next(data);
      return data;
    }))
  }

  get authenticatedUser() {
    return this.currentUserSubject.value;
  }
}
