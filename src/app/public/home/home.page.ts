import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})



export class HomePage implements OnInit {

  data = '';
  cards = {
    card: [
      {
        cardTitle:'first Card',
        cardsubTitle: '1st subtitle',
        content: 'This is the first card on driver view'
      },
      {
        cardTitle:'second Card',
        cardsubTitle: '2nd subtitle',
        content: 'This is the 2nd card on driver view'
      },
      {
        cardTitle:'third Card',
        cardsubTitle: '3rd subtitle',
        content: 'This is the third card on driver view'
      }
    ]
  };

  constructor(private authService: AuthenticationService,
              private storage: Storage,
              private toastController: ToastController) {
  }

  ngOnInit() {
  }

  loadSpecialInfo() {
    this.authService.getSpecialData().subscribe( res => {
      this.data = res[`msg`];
    });
  }

  logout() {
    this.authService.logout();
  }

  clearToken() {
    this.storage.remove('access_token');

    const toast = this.toastController.create({
      message: 'JWT removed',
      duration: 3000
    });
    toast.then(newtoast => newtoast.present());
  }

}