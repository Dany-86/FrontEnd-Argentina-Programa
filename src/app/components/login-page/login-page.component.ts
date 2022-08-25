import { ThisReceiver } from '@angular/compiler'; // PENDIENTE A FUTURO ¿?
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  passwordMinCharacter: number = 4;
  passwordMaxCharacter: number = 12;
  

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthenticationService
  ) {
    this.loginForm = this.formBuilder.group({
      mail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,
                      Validators.minLength(this.passwordMinCharacter),
                      Validators.maxLength(this.passwordMaxCharacter),],]
          
                      /*  PENDIENTE A IMPLEMENTAR CON JWT 
                         ,deviceInfo: this.formBuilder.group({
                          deviceId: ["17867868768"],
                          deviceType: ["DEVICE_TYPE_ANDROID"],
                          notificationToken: ["67657575eececc34"]}) */
                    });
  }

  ngOnInit(): void {}

  get mail() {
    return this.loginForm.get('mail');
  }
  
  get password() {
    return this.loginForm.get('password');
  }

  onSend(event: Event): void {
    event.preventDefault;
    this.authService.Login(this.loginForm.value).subscribe(data => {
      console.log("DATA: " + JSON.stringify(data));
      this.router.navigate(['home']);
    })
  }
}
