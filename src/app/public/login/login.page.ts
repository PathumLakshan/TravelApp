// JWT AUTH
import { AuthenticationService } from './../../services/authentication/authentication.service';
// Google Auth
import { GAuthenticateService } from './../../services/g-auth/gauthentication.service';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl, FormGroupDirective, NgForm } from '@angular/forms';

import {ErrorStateMatcher} from '@angular/material/core';
import { NavController } from '@ionic/angular';

// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  credentialsForm: FormGroup;
  // matcher = new MyErrorStateMatcher();
  errorMessage: string = '';

  validationMessages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' }
    ]
  };

  constructor(private authService: AuthenticationService,
              private formBuilder: FormBuilder,
              // private gAuthService: GAuthenticateService,
              private navCtrl: NavController) { }

  ngOnInit() {
    // this.credentialsForm = this.formBuilder.group({
    //   email: ['', [Validators.required, Validators.email]],
    //   password: ['', [Validators.required, Validators.minLength(6)]]
    // });

    this.credentialsForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    });

  }

 

  // onSubmit() {
  //   this.authService.login(this.credentialsForm.value).subscribe();
  // }

  // register() {
  //   this.authService.register(this.credentialsForm.value).subscribe(res => {
  //     // Call Login to automatically login the new user
  //     this.authService.login(this.credentialsForm.value).subscribe();
  //   });
  // }

  // signUpPas() {
  //   alert('google auth');
  // }


  // Google Auth

  // loginUser(value) {
  //   this.gAuthService.loginUser(value)
  //   .then(res => {
  //     console.log(res);
  //     this.errorMessage = '';
  //     this.navCtrl.navigateForward('/');
  //   }, err => {
  //     this.errorMessage = err.message;
  //   })
  // }
 
  goToRegisterPage() {
    this.navCtrl.navigateForward('/register');
  }
}
