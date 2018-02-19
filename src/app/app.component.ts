import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})
export class PwaApp {

  @ViewChild(Nav) nav: Nav;
  rootPage: any = 'HomePage';
  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform) {

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: 'HomePage' },
      { title: 'Center Example', component: 'CenterExamplePage' },
      { title: 'Images Example', component: 'ImagesExamplePage' },
      { title: 'List', component: 'ListPage' },
    ];

  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
