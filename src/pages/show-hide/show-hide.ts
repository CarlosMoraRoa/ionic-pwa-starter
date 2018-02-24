import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ShowHidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-hide',
  templateUrl: 'show-hide.html',
})
export class ShowHidePage {

  tab1Root = "TabOnePage";
  tab2Root = "TabTwoPage";
  tab3Root = "TabThreePage";

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowHidePage');
  }

}
