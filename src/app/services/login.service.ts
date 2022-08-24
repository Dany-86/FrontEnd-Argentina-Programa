import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../models/login.model';

@Injectable({
    providedIn: 'root'
  })

export class LoginService{

    url: string = "http://localhost:8080/login/"; 

    constructor(private httpClient: HttpClient) {}

    Login(login: Login):Observable<any> { 
        return this.httpClient.post<any>(this.url, login);
    }
}