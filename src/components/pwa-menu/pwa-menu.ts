import { Component, Input, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PWAConfig } from "../../app/app.pwa.config";

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

  @Input() menuItems: Array<any> = PWAConfig.MenuItems;

  constructor(private navCtrl: NavController, private el: ElementRef) {
  }

  ngOnInit() {
    this.menuShouldShowCheck();
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
