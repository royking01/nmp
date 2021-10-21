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
}
