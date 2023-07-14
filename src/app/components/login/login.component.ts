import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: []
})
export class LoginComponent {
    isLogin: boolean = false;
    loginForm: FormGroup;
    registerForm: FormGroup;
    constructor(private router: Router, public authService: AuthService) {
      this.registerForm = new FormGroup({
        "fullName": new FormControl('', Validators.required),
        "email": new FormControl('', [Validators.required, Validators.email]),
        "password": new FormControl('', [ Validators.required, Validators.minLength(5) ]),
        "company": new FormControl('', Validators.required) 
      })

      this.loginForm = new FormGroup({
        "email": new FormControl('', [Validators.required, Validators.email]),
        "password": new FormControl('', [ Validators.required, Validators.minLength(5) ]) 
      })
    }

    submitRegisterForm() {
      this.authService.register(this.registerForm.value)
      this.registerForm.reset();
    }

    submitLoginForm() {
      this.authService.login(this.loginForm.value.email, this.loginForm.value.password)
      this.registerForm.reset();
    }
}
