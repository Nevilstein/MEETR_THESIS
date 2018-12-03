import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserPage} from '../user/user';
/**
 * Generated class for the UsersettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-usersetting',
  templateUrl: 'usersetting.html',
})
export class UsersettingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersettingPage');
  }
  goBack(){
  	this.navCtrl.setRoot(UserPage);
  }
}
