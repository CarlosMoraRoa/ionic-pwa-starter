import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { PWAConfig, IMenuItems } from "./app.pwa.config";


@Component({
  templateUrl: 'app.html',
  host: {
    '(window:resize)': 'onWindowResize($event)'
  }
})
export class PwaApp {

  @ViewChild(Nav) nav: Nav;
  rootPage: any = 'HomePage';
  pages: Array<IMenuItems>;
  
  // Set appendUniqueMenuItems to true in order to append a unique top right hand menu to the main menu 
  // Unique menu will only be appended when smaller then 992px - change this if you want
  appendUniqueMenuItems: boolean = true;
  hasSetUniqueMenuItems: boolean = false;

  constructor(public platform: Platform) {

    // used for an example of ngFor and navigation
    this.pages = PWAConfig.MenuItems;
    this.setUniqueMenu();
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  onWindowResize($event) {
    this.setUniqueMenu();
  }

  setUniqueMenu() {
    if (this.appendUniqueMenuItems && window.innerWidth <= 992) {
      if (!this.hasSetUniqueMenuItems) {
        this.hasSetUniqueMenuItems = true;
        this.pages = this.pages.concat(PWAConfig.MenuItemsUnique)
      }
    } else if (this.appendUniqueMenuItems) {
      this.hasSetUniqueMenuItems = false;
      this.pages = this.pages.filter(x => PWAConfig.MenuItemsUnique.indexOf(x) === -1);
    }
  }

}
