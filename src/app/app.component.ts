import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { PWAConfig } from "./app.pwa.config";


@Component({
  templateUrl: 'app.html'
})
export class PwaApp {

  @ViewChild(Nav) nav: Nav;
  rootPage: any = 'HomePage';
  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform) {

    // used for an example of ngFor and navigation
    this.pages = PWAConfig.MenuItems;

  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
