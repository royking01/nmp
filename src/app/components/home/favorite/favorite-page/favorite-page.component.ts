import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.scss'],
})
export class FavoritePageComponent implements OnInit {
  constructor(public modalController: ModalController) {}

  ngOnInit() {}
  closeHome() {
    this.modalController.dismiss();
  }
}
