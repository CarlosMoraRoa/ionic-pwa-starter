import { Component, ViewChild, Renderer2 } from '@angular/core';
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
  @ViewChild('splitMenu') splitMenu: any;
  rootPage: any = 'HomePage';
  pages: Array<IMenuItems>;
  activePage: any;

  // Set appendUniqueMenuItems to true in order to append a unique top right hand menu to the main menu 
  // Unique menu will only be appended when smaller then 992px - change this if you want
  appendUniqueMenuItems: boolean = true;
  hasSetUniqueMenuItems: boolean = false;

  constructor(public platform: Platform, private renderer2: Renderer2) {

    // used for an example of ngFor and navigation
    this.pages = PWAConfig.MenuItems;
    this.activePage = this.pages[0];
    this.setUniqueMenu();
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  checkActiveItem(page) {
    // Set split pane active menu item based on current pages component name
    if (this.nav.getActive()) {
      let activePage = this.nav.getActive().name;
      return page.component === activePage;
    }
  }

  onWindowResize() {
    this.setUniqueMenu();
  }

  setUniqueMenu() {
    // Pushs unique top right hand menu items onto main menu when smaller device
    // Set isUniqueMenu="true" on <pwa-menu> 
    if (this.appendUniqueMenuItems && window.innerWidth <= 992) {
      if (!this.hasSetUniqueMenuItems) {
        this.hasSetUniqueMenuItems = true;
        this.pages = this.pages.concat(PWAConfig.MenuItemsTopNav)
      }
    } else if (this.appendUniqueMenuItems) {
      // watchs for screen size change
      this.hasSetUniqueMenuItems = false;
      this.pages = this.pages.filter(x => PWAConfig.MenuItemsTopNav.indexOf(x) === -1);
    }
  }

  shouldShow() {
    // Set comparision here for center page
    // need to check if ion-content has the pwa-center attribute
    return true;
  }

}
