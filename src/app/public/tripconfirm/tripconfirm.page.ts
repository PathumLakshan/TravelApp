import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tripconfirm',
  templateUrl: './tripconfirm.page.html',
  styleUrls: ['./tripconfirm.page.scss'],
})
export class TripconfirmPage implements OnInit {

  cnfrmForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.cnfrmForm = this.formBuilder.group({
      fullname: ['', Validators.required]
    });
  }

  onSubmit() {
    alert('shit')
  }
}
