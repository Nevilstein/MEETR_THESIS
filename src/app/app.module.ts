import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TestPage } from '../pages/test/test';
import { SettingPage } from '../pages/setting/setting';
import { AboutPage } from '../pages/about/about';
import { LoginPage } from '../pages/login/login';
<<<<<<< HEAD
=======
import { UserPage } from '../pages/user/user';
import { UsereditPage } from '../pages/useredit/useredit';
import {UsersettingPage} from '../pages/usersetting/usersetting';
>>>>>>> 4b32c90... user page

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Facebook} from '@ionic-native/facebook';
import firebase from 'firebase';

export const firebaseConfig={  
  apiKey: "AIzaSyCjTUixYv189FGdP3hQdztU_HCbtqvjJTU",
  authDomain: "meetr-e4a7c.firebaseapp.com",
  databaseURL: "https://meetr-e4a7c.firebaseio.com",
  projectId: "meetr-e4a7c",
  storageBucket: "meetr-e4a7c.appspot.com",
  messagingSenderId: "400578335773"
}
firebase.initializeApp(firebaseConfig)

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TestPage,
    SettingPage,
    AboutPage,
<<<<<<< HEAD
    LoginPage
=======
    LoginPage,
    UserPage,
    UsereditPage,
    UsersettingPage
>>>>>>> 4b32c90... user page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    TestPage,
    SettingPage,
    AboutPage,
<<<<<<< HEAD
    LoginPage
=======
    LoginPage,
    UserPage,
    UsereditPage,
    UsersettingPage
>>>>>>> 4b32c90... user page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
