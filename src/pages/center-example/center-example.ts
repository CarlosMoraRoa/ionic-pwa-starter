import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the CenterExamplePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-center-example',
  templateUrl: 'center-example.html',
})
export class CenterExamplePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform) {

  }


}
