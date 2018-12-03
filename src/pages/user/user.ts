import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginPage} from '../login/login'
import {UsereditPage} from '../useredit/useredit';
import {UsersettingPage} from '../usersetting/usersetting';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }
  goBack(){
  	this.navCtrl.setRoot(LoginPage);
  }
  user_edit(){
  	this.navCtrl.setRoot(UsereditPage);
  }
  user_setting(){
    this.navCtrl.setRoot(UsersettingPage);
  }
}
