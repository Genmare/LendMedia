import { AuthPage } from './../pages/auth/auth';
import { AuthService } from './../services/auth.service';
import { SettingsPage } from './../pages/settings/settings';
import { LendCdPage } from './../pages/lend-cd/lend-cd';
import { LendBookPage } from './../pages/lend-book/lend-book';
import { MediaService } from './../services/media.service';
import { CdListPage } from './../pages/cd-list/cd-list';
import { TabsPage } from './../pages/tabs/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { BookListPage } from '../pages/book-list/book-list';

@NgModule({
  declarations: [
    MyApp,
    BookListPage,
    CdListPage,
    LendBookPage,
    LendCdPage,
    SettingsPage,
    TabsPage,
    AuthPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BookListPage,
    CdListPage,
    LendBookPage,
    LendCdPage,
    SettingsPage,
    TabsPage,
    AuthPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MediaService,
    AuthService
  ]
})
export class AppModule {}
