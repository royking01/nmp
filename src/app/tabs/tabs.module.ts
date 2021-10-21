import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { AuthPageModule } from '../components/auth/auth/auth.module';
import { HomeComponent } from '../components/home/home/home.component';
import { HomepageComponent } from '../components/home/homepage/homepage/homepage.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    AuthPageModule,
  ],
  declarations: [TabsPage],
})
export class TabsPageModule {}
