import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss'],
})
export class AccountPageComponent implements OnInit {
  constructor(public modalController: ModalController) {}

  ngOnInit() {}
  closeHome() {
    this.modalController.dismiss();
  }
}
