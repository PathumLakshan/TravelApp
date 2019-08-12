import { Injectable } from '@angular/core';
import { ToastController, Platform  } from '@ionic/angular';

import { FcmService } from '../fcmService/fcm.service';

// import { Subject } from 'rxjs/Subject';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastController: ToastController) { }

  showAlert(msg) {
    const alert = this.toastController.create({
      header: 'Error',
      message: msg,
      buttons: ['OK']
    });

    alert.then(newalert => newalert.present());
  }
}
