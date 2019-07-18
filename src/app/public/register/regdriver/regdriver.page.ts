import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthenticationService } from './../../../services/authentication/authentication.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-regdriver',
  templateUrl: './regdriver.page.html',
  styleUrls: ['./regdriver.page.scss'],
})

export class RegdriverPage implements OnInit {

  driverregForm: FormGroup;
  listItem: any = [];


  constructor(private formBuilder: FormBuilder,
              private authService: AuthenticationService,
              private actionSheetController: ActionSheetController) { }

  ngOnInit() {
    this.driverregForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      nic: ['', Validators.required],
      lsno: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.driverregForm.value);
  }

  register() {
    this.authService.register(this.driverregForm.value).subscribe( res => {
      this.authService.login(this.driverregForm.value).subscribe();
    })
  }

  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
        header: 'Select Image source',
        buttons: [{
                text: 'Load from Library',
                handler: () => {
                  // if image upload success add image id to array
                    this.listItem.push('ABS');
                    console.log(this.listItem);
                }
            },
            {
                text: 'Use Camera',
                handler: () => {
                  alert('B')
                }
            },
            {
                text: 'Cancel',
                role: 'cancel'
            }
        ]
    });
    await actionSheet.present();
}


}
