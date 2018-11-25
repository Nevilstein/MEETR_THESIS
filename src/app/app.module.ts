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
    LoginPage
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
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
