import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginProvisionalAuthenticationService } from "./loginProvisionalAuthentication.service";

@Injectable({
    providedIn: 'root'
  })
export class LoginGuardService implements CanActivate{

    constructor(private authProvisionalService: LoginProvisionalAuthenticationService,
                private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(!this.authProvisionalService.isLogged) {
            return true;
        } else {
            this.router.navigate(['home']);
            return false;
        };
    }

}