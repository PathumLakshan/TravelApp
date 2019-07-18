import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private alertController: AlertController) { }

  showAlert(msg) {
    const alert = this.alertController.create({
      header: 'Error',
      message: msg,
      buttons: ['OK']
    });

    alert.then(newalert => newalert.present());
  }
}
