import { Component, Input, ElementRef, Renderer2 } from '@angular/core';
import { NavController } from 'ionic-angular';
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

  constructor(private navCtrl: NavController, private el: ElementRef, private renderer2: Renderer2) {
  }

  ngOnInit() {
    this.menuShouldShowCheck();
    let ionContentElCheckForPwaCenter = this.el.nativeElement.parentElement.parentElement.parentElement.parentElement.children[1].attributes.hasOwnProperty('pwa-center');
    this.standAlone || ionContentElCheckForPwaCenter && (this.menuItems = PWAConfig.MenuItems);
  }

  onWindowResize() {
    this.menuShouldShowCheck();
  }

  menuShouldShowCheck() {
    this.el.nativeElement.hidden = window.innerWidth <= 992 ? true : false;
  }

  goto(item) {
    this.navCtrl.setRoot(item.component);
  }

}
