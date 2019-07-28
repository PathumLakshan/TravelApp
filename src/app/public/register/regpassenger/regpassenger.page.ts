import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthenticationService } from './../../../services/authentication/authentication.service';

@Component({
  selector: 'app-regpassenger',
  templateUrl: './regpassenger.page.html',
  styleUrls: ['./regpassenger.page.scss'],
})
export class RegpassengerPage implements OnInit {

  passengregForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthenticationService) { }

  ngOnInit() {
    this.passengregForm = this.formBuilder.group({
      fullname : ['', [Validators.required]],
      nic: [''],
      email: [''],
      country: [''],
      teleno: ['']
    });
  }

  onSubmit() {
    console.log(this.passengregForm.value);
  }

  register() {
    this.authService.register(this.passengregForm.value).subscribe( res => {
      this.authService.login(this.passengregForm.value).subscribe();
    });
  }


}
