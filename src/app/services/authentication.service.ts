import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  url: string = "http://localhost:8080/api/login/";
  currentUserSubject: BehaviorSubject<any>; 

  constructor(private httpClient: HttpClient, private router: Router) { 
    console.log("El servicio autenticacion esta corriendo");
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'));
  }

  Login(credentials: any): Observable<any> {
    return this.httpClient.post(this.url, credentials).pipe(map(data => {
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      this.currentUserSubject.next(data);
      console.log("Se ha logueado");
      return data;
    }))
  }

  LogOut(): void {
    console.log("Cierre en auth");
    sessionStorage.clear();
    this.router.navigate(['/']);
  }

  get authenticatedUser() {
    return this.currentUserSubject.value;
  }

  setLogged(): boolean{
    if(sessionStorage.getItem('currentUser')) {
      console.log("setLogged true");
      return true;
    } else {
      console.log("setLogged false");
      return false;
    }
  }
}
