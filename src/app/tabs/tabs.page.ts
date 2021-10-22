import { Component } from '@angular/core';
import { tabInterface } from '../Interfaces/Auth/tab-interface';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  tabs: tabInterface[] = [
    { label: 'Home', icon: 'home-sharp', component: 'tab1' },
    {
      label: 'Favorite',
      icon: 'heart-dislike-circle-outline',
      component: 'tab2',
    },
    {
      label: 'Explore',
      icon: 'compass-outline',
      component: 'tab3',
    },
    {
      label: 'Account',
      icon: 'person-outline',
      component: 'tab4',
    },
  ];
  constructor() {}
}
