import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  url: string = "http://localhost:8080/api/login/";
  currentUserSubject: BehaviorSubject<any>; 

  constructor(private httpClient: HttpClient, private router: Router, 
    private toastr: ToastrService) { 
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'));
  }

  Login(credentials: any): Observable<any> {
    return this.httpClient.post(this.url, credentials).pipe(map(data => {
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      this.currentUserSubject.next(data);
      return data;
    }))
  }

  LogOut(): void {
    sessionStorage.clear();
    this.router.navigate(['/']);
    this.toastr.info('Sesion cerrada')
  }

  get authenticatedUser() {
    return this.currentUserSubject.value;
  }

  setLogged(): boolean{
    if(sessionStorage.getItem('currentUser')) {
      return true;
    } else {
      return false;
    }
  }
}
