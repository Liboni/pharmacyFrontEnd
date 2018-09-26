import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from './environments/environment';
import { LoginPageModule } from '../pages/login/login.module';
import { RegisterPage } from '../pages/register/register';
import { RegisterPageModule } from '../pages/register/register.module';
import { HomePage } from '../pages/home/home';
import { DrugPageModule } from '../pages/drug/drug.module';
import { DrugPage } from '../pages/drug/drug';
import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';
import { DrugsPage } from '../pages/drugs/drugs';
import { DrugsPageModule } from '../pages/drugs/drugs.module';
import { DrugCatergoryPage } from '../pages/drug-catergory/drug-catergory';
import { DrugCatergoryPageModule } from '../pages/drug-catergory/drug-catergory.module';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { ResetPasswordPageModule } from '../pages/reset-password/reset-password.module';
import { NotificationsPageModule } from '../pages/notifications/notifications.module';
import { NotificationsPage } from '../pages/notifications/notifications';
import { ChangePasswordPage } from '../pages/change-password/change-password';
import { ChangePasswordPageModule } from '../pages/change-password/change-password.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),   
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    LoginPageModule, 
    AngularFirestoreModule,
    RegisterPageModule,
    DrugPageModule,
    DrugsPageModule,
    DrugCatergoryPageModule,
    ResetPasswordPageModule,
    NotificationsPageModule,
    ChangePasswordPageModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    HomePage,
    DrugPage,
    DrugsPage,
    DrugCatergoryPage,
    ResetPasswordPage,
    NotificationsPage,
    ChangePasswordPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseServiceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}    
  ]
})
export class AppModule {}
