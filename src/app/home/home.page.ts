import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../services/authentication.service';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  data = '';
 
  constructor(private authService: AuthenticationService, 
              private storage: Storage,
              private toastController: ToastController) {
  }
  
  ngOnInit() {
  }

  loadSpecialInfo() {
    this.authService.getSpecialData().subscribe( res =>{
      this.data = res[`msg`];
    })
  }

  logout() {
    this.authService.logout();
  }

  ClearToken() {
    this.storage.remove('access_token');

    const toast = this.toastController.create({
      message: 'JWT removed',
      duration: 3000
    });
    toast.then(newtoast => newtoast.present());
  }


}