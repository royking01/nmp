import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ModalServiceService {
  constructor(public modalController: ModalController) {}
  closeModal() {
    this.modalController.dismiss();
  }
  async openModal(component_, props = '') {
    const modal = await this.modalController.create({
      component: component_,
      cssClass: 'Home-css',
    });
    return await modal.present();
  }
}
