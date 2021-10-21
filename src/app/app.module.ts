import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountPageComponent } from './components/home/account/account-page/account-page.component';
import { ExplorePageComponent } from './components/home/explore/explore-page/explore-page.component';
import { FavoritePageComponent } from './components/home/favorite/favorite-page/favorite-page.component';
import { HomeComponent } from './components/home/home/home.component';
import { HomepageComponent } from './components/home/homepage/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomepageComponent,
    ExplorePageComponent,
    AccountPageComponent,
    FavoritePageComponent,
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
