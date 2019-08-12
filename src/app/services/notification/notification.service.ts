import { Injectable } from '@angular/core';
import { ToastController  } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastController : ToastController ) { }

  showAlert(msg) {
    const alert = this.toastController.create({
      header: 'Error',
      message: msg,
      buttons: ['OK']
    });

    alert.then(newalert => newalert.present());
  }
}
