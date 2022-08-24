import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
  })

export class LoginProvisionalAuthenticationService{

    //isLogged: boolean = true;
    isLogged: boolean = false;

    constructor(private router: Router) {}

    LogIn(data: any): boolean { 
        if(data.mail == 'ok' && data.password == 'ok') {
            this.isLogged = true;
            console.log("Se ha iniciado sesión satisfactoriamente!");
            this.router.navigate(['home']);
            return true;
        } else {
            return false;
        }
    }

    LogOut() {
        this.isLogged = false;
        console.log("Se ha cerrado la sesión");
        this.router.navigate(['/']);
    }
}