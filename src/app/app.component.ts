import { AuthPage } from './../pages/auth/auth';
import { SettingsPage } from './../pages/settings/settings';
import { TabsPage } from './../pages/tabs/tabs';
import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import * as firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  tabsPage:any = TabsPage;
  settingsPage:any = SettingsPage;
  authPage: any = AuthPage;
  @ViewChild('content') content: NavController;

  isAuth: boolean;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      let firebaseConfig = {
        apiKey: "AIzaSyBVoGpgcghKQf0UZuDyseik-pM88OaCUkQ",
        authDomain: "lend-media-e9ad3.firebaseapp.com",
        databaseURL: "https://lend-media-e9ad3.firebaseio.com",
        projectId: "lend-media-e9ad3",
        storageBucket: "lend-media-e9ad3.appspot.com",
        messagingSenderId: "503507548584",
        appId: "1:503507548584:web:473b00e85da251c5"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.auth().onAuthStateChanged(
        (user) => {
          if (user) {
            this.isAuth = true;
            this.content.setRoot(TabsPage);
          } else {
            this.isAuth = false;
            this.content.setRoot(AuthPage, {mode: 'connect'});
          }
        }
      );
    });
  }

  onNavigate(page: any, data?: {}) {
    this.content.setRoot(page, data ? data : null);
    this.menuCtrl.close();
  }

  onDisconnect() {
    firebase.auth().signOut();
    this.menuCtrl.close();
  }
}

