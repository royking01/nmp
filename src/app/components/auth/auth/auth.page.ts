import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HomeComponent } from '../../home/home/home.component';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  email: string = '';
  password: any = '';
  async presentHome() {
    const modal = await this.modalController.create({
      component: HomeComponent,
      cssClass: 'Home-css',
    });
    return await modal.present();
  }
  constructor(public modalController: ModalController) {
    const logged = localStorage.getItem('isLoggedIn');
    // logged ? this.login() : '';
  }

  ngOnInit() {}
  login() {
    const logged = localStorage.getItem('isLoggedIn');
    logged ? localStorage.setItem('isLoggedIn', 'TRUE') : '';
    this.presentHome();
  }
}
