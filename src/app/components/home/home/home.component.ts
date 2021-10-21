import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationBuilder, ModalController } from '@ionic/angular';
import { tabInterface } from 'src/app/Interfaces/Auth/tab-interface';
import { HomepageComponent } from '../homepage/homepage/homepage.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  tabs: tabInterface[] = [
    { label: 'Home', icon: 'home-sharp' },
    { label: 'Favorite', icon: 'heart-dislike-circle-outline' },
    { label: 'Explore', icon: 'compass-outline' },
    { label: 'Account', icon: 'person-outline' },
  ];
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
    console.log(tab);
    this.presentHome();
    // this.router.navigate(['/home-page']);
  }
}
