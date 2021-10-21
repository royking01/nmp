import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-explore-page',
  templateUrl: './explore-page.component.html',
  styleUrls: ['./explore-page.component.scss'],
})
export class ExplorePageComponent implements OnInit {
  constructor(public modalController: ModalController) {}

  ngOnInit() {}
  closeHome() {
    this.modalController.dismiss();
  }
}
