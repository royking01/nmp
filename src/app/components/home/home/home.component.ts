import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { HomepageComponent } from '../homepage/homepage/homepage.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  async presentHome() {
    const modal = await this.modalController.create({
      component: HomepageComponent,
      cssClass: 'Home-css',
    });
    return await modal.present();
  }

  constructor(
    private router: Router,
    public modalController: ModalController
  ) {}

  ngOnInit() {}
  handleTabRoute(tab) {
    this.presentHome();
    // this.router.navigate(['/home-page']);
  }
}
