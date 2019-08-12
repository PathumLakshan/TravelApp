import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-journeyplan',
  templateUrl: './journeyplan.page.html',
  styleUrls: ['./journeyplan.page.scss'],
})
export class JourneyplanPage implements OnInit {

  journeyplanForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.journeyplanForm = this.formBuilder.group({
      loc_from: [''],
      waypoints: this.formBuilder.array([
        this.initWaypointFields()
      ]),
      no_psngr: [''],
      loc_pickup: [''],
      no_nights: [''],
      date_from: [''],
      date_to: [''],
      pickup_time: [''],
      vehicle_condition: [''],
      vehicle_type: [''],
      desc: ['']
    });
  }

  initWaypointFields(): FormGroup {
    return this.formBuilder.group({
        waypoint : ['', Validators.required]
    });
  }

  addNewInputField() {
    const control =  this.journeyplanForm.controls.waypoints as FormArray;
    control.push(this.initWaypointFields());
  }

  removeInputField(i: number) {
   const control = this.journeyplanForm.controls.waypoints as FormArray;
   control.removeAt(i);
}

  onSubmit() {
    console.log(this.journeyplanForm.value);
    this.router.navigate(['/home/tab2']);
  }

}