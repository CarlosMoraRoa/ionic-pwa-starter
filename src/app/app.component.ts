import { Component, ViewChild, Renderer2, ElementRef } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { PWAConfig, IMenuItems } from "./app.pwa.config";
import { } from "lodash";


@Component({
  templateUrl: 'app.html',
  host: {
    '(window:resize)': 'onWindowResize($event)'
  }
})
export class PwaApp {

  @ViewChild(Nav) nav: Nav;
  @ViewChild('menu') menu:ElementRef;
  rootPage: any = 'HomePage';
  pages: Array<IMenuItems>;

  // Set appendTopNavMenuItems to true in order to append a unique top right hand menu to the main menu 
  // Unique menu will only be appended when smaller then 992px - change this if you want
  appendTopNavMenuItems: boolean = true;
  hasSetTopNavMenuItems: boolean = false;

  constructor(public platform: Platform, private renderer2: Renderer2, private el: ElementRef) {

    // used for an example of ngFor and navigation
    this.pages = PWAConfig.MenuItems;    
  }

  checkToShowSplitPane(){
    // initially set the split pane hidden. This prevents a flash of the split pane in the directive pwa-center 
    // is added this.ionMenuEl = this.el.nativeElement.getElementsByTagName('ion-menu')[0];
    let val = true;
    let ionContentEl = this.el.nativeElement.getElementsByTagName('ion-content')[1];
    if(ionContentEl){
      val = ionContentEl.className.includes('pwa-center') ? true : false;
    }
    return val
  }


  ngOnInit() {
    this.setTopNavMenuIntoMainMenu();
    this.checkToShowIonMenu();
  }


  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  checkActiveItem(page) {
    // Set split pane active menu item based on current pages component name
    if (this.nav.getActive()) {
      return page.component === this.nav.getActive().name;
    }
  }

  onWindowResize() {
    this.setTopNavMenuIntoMainMenu();
    this.checkToShowIonMenu();
  }

  checkToShowIonMenu() {
    let ionMenuEl = this.el.nativeElement.getElementsByTagName('ion-menu')[0];
    if (window.innerWidth >= 768) {
      if (ionMenuEl) {
        this.renderer2.removeClass(ionMenuEl, 'split-pane-none')
      }
    } else {
      if (ionMenuEl) {
        this.renderer2.removeClass(ionMenuEl, 'split-pane-none')
      }
    }
  }

  setTopNavMenuIntoMainMenu() {
    // Pushs unique top right hand menu items onto main menu when smaller device
    // Set isUniqueMenu="true" on <pwa-menu> 
    if (this.appendTopNavMenuItems && window.innerWidth <= 992) {
      if (!this.hasSetTopNavMenuItems) {
        this.hasSetTopNavMenuItems = true;
        this.pages = this.pages.concat(PWAConfig.MenuItemsTopNav)
      }
    } else if (this.appendTopNavMenuItems) {
      // watchs for screen size change
      this.hasSetTopNavMenuItems = false;
      this.pages = this.pages.filter(x => PWAConfig.MenuItemsTopNav.indexOf(x) === -1);
    }
  }

}
