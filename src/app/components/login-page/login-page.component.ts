import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;
  passwordMinCharacter: number = 4;
  passwordMaxCharacter: number = 12;

  constructor(private formBuilder: FormBuilder, private router: Router) { 
    this.loginForm = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]], 
      password: ['',[Validators.required, Validators.minLength(this.passwordMinCharacter), Validators.maxLength(this.passwordMaxCharacter)]] 
    })
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }


  ngOnInit(): void {
  
  }

  onSend(): void {
    console.log('Form ->', this.loginForm.value);
    this.router.navigate(['/']);
  }
  
}
