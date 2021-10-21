import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationBuilder, ModalController } from '@ionic/angular';
import { tabInterface } from 'src/app/Interfaces/Auth/tab-interface';
import { AccountPageComponent } from '../account/account-page/account-page.component';
import { ExplorePageComponent } from '../explore/explore-page/explore-page.component';
import { FavoritePageComponent } from '../favorite/favorite-page/favorite-page.component';
import { HomepageComponent } from '../homepage/homepage/homepage.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  tabs: tabInterface[] = [
    { label: 'Home', icon: 'home-sharp', component: HomepageComponent },
    {
      label: 'Favorite',
      icon: 'heart-dislike-circle-outline',
      component: FavoritePageComponent,
    },
    {
      label: 'Explore',
      icon: 'compass-outline',
      component: ExplorePageComponent,
    },
    {
      label: 'Account',
      icon: 'person-outline',
      component: AccountPageComponent,
    },
  ];
  async presentHome(component) {
    const modal = await this.modalController.create({
      component: component,
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
    this.presentHome(tab);
    // this.router.navigate(['/home-page']);
  }
}
