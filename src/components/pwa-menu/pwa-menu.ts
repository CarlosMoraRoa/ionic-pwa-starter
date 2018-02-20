import { Component, Input, ElementRef } from '@angular/core';
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

  @Input() menuItems: Array<IMenuItems> = PWAConfig.MenuItems;
  @Input() isUniqueMenu: boolean;
  @Input() addToMainMenu: boolean;

  constructor(private navCtrl: NavController, private el: ElementRef) {
  }

  ngOnInit() {
    this.menuShouldShowCheck();
    this.isUniqueMenu && (this.menuItems = PWAConfig.MenuItemsUnique);
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
