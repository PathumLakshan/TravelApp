import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-setjourneyplan',
  templateUrl: './setjourneyplan.page.html',
  styleUrls: ['./setjourneyplan.page.scss'],
})

export class SetjourneyplanPage implements OnInit {
 
  public slideOneForm: FormGroup;
  title: string;
  description: string;

  constructor(public formBuilder: FormBuilder) {
    this.slideOneForm = formBuilder.group({
      firstName: [''],
      lastName: [''],
      age: ['']
    });
   }

   ngOnInit() {
  }

  logForm() {
    console.log(this.slideOneForm.value);
  }

}
