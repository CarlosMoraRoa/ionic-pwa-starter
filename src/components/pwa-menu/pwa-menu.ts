import { Component, Input, ElementRef } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { PWAConfig, IMenuItems } from "../../app/app.pwa.config";

/**
 * Generated class for the PwaMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pwa-menu',
  templateUrl: 'pwa-menu.html',
  host: {
    '(window:resize)': 'onWindowResize($event)'
  }
})
export class PwaMenuComponent {

  @Input() menuItems: Array<IMenuItems> = PWAConfig.MenuItemsTopNav;
  @Input() standAlone: boolean;

  constructor(private navCtrl: NavController, private el: ElementRef, private platform: Platform) {
  }

  ngOnInit() {
    this.menuShouldShowCheck();
    let ionContentElCheckForPwaCenter = this.el.nativeElement.parentElement.parentElement.parentElement.parentElement.children[1].attributes.hasOwnProperty('pwa-center');
    if ((this.standAlone || ionContentElCheckForPwaCenter) && !this.platform.is('ipad')) {
      this.menuItems = PWAConfig.MenuItems
    }
  }

  onWindowResize() {
    this.menuShouldShowCheck();
  }

  menuShouldShowCheck() {
    this.el.nativeElement.hidden = window.innerWidth <= 768 || this.platform.is('ipad') ? true : false;
  }

  goto(item) {
    this.navCtrl.setRoot(item.component);
  }

}
