import { Component, Input, ViewChild } from '@angular/core';
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
  templateUrl: 'pwa-menu.html'
})
export class PwaMenuComponent {

  @Input() menuItems: Array<any> = PWAConfig.MenuItems;

  constructor(private navCtrl: NavController) {
  }

  ngOnInit() {
  }

  goto(item) {
    this.navCtrl.setRoot(item.component);
  }

}
