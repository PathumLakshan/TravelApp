import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { NotificationService } from '../../../services/notification/notification.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  journeyplanForm: FormGroup;
  

  constructor(private formBuilder: FormBuilder, private notify: NotificationService) { }

  ngOnInit() {
    this.journeyplanForm = this.formBuilder.group({
      loc_from: [''],
      loc_to: [''],
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
      vehicle_brand: [''],
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
    alert(this.journeyplanForm.value.vehicle_brand);
  }

}
