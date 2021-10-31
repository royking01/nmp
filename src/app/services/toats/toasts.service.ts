import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ToastsService {
  constructor(public toastController: ToastController) {}
  async presentToast(messge = 'Invalid Email or Password') {
    const toast = await this.toastController.create({
      message: messge,
      duration: 2090,
      cssClass: '',
    });
    toast.present();
  }
}
