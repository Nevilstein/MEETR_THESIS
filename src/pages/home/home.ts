import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }
  click_card1() {
    const alert = this.alertCtrl.create({
      title: 'You clicked a card!',
      subTitle: 'You just clicked card 1',
      buttons: ['OK']
    });
    alert.present();
  }
  click_card2() {
    const alert = this.alertCtrl.create({
      title: 'You clicked a card!',
      subTitle: 'You just clicked card 2',
      buttons: ['OK']
    });
    alert.present();
  }
  click_card3() {
    const alert = this.alertCtrl.create({
      title: 'You clicked a card!',
      subTitle: 'You just clicked card 3',
      buttons: ['OK']
    });
    alert.present();
  }
  click_card4() {
    const alert = this.alertCtrl.create({
      title: 'You clicked a card!',
      subTitle: 'You just clicked card 4',
      buttons: ['OK']
    });
    alert.present();
  }

}
