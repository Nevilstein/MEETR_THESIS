import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Facebook} from '@ionic-native/facebook';
import firebase from 'firebase';
import { HomePage } from '../home/home';
import { UserPage } from '../user/user';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()  
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public facebook:Facebook, public navParams: NavParams ) {
  }

  //FACEBOOK Login, working on Android Emulator, but not on ionic serve
  facebookLogin(){
    this.facebook.login(['email']).then(res=>{
      const fbcredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken)
      firebase.auth().signInWithCredential(fbcredential).then(fs=>{
        alert("Login Successful")
      }).catch(error=>{
        alert("Login Error")
      })
    }).catch(error=>{
        alert(JSON.stringify(error))
    })
  }
  
  //DO NOT DELETE, Reference siya sa fb login ko
    /*
    let provider = new firebase.auth.FacebookAuthProvider();  
    firebase.auth().signInWithRedirect(provider).then(()=>{
      firebase.auth().getRedirectResult().then((result)=>{
        alert(JSON.stringify(result));
      }).catch(function(error){
        alert(JSON.stringify(error))
      });
    })
    */
  ///////////////////////////////////////////////

  // REDIRECTS
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }  
  gotoAdmin(){
    this.navCtrl.setRoot(HomePage);
  }
  gotoUser(){
    this.navCtrl.setRoot(UserPage);
  }
}

