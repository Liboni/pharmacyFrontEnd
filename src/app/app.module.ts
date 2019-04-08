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
import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';
import { DrugsPage } from '../pages/drugs/drugs';
import { DrugsPageModule } from '../pages/drugs/drugs.module';
import { DrugCatergoryPage } from '../pages/drug-catergory/drug-catergory';
import { DrugCatergoryPageModule } from '../pages/drug-catergory/drug-catergory.module';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { ResetPasswordPageModule } from '../pages/reset-password/reset-password.module';
import { NotificationsPageModule } from '../pages/notifications/notifications.module';
import { NotificationsPage } from '../pages/notifications/notifications';
import { FaqPageModule } from '../pages/faq/faq.module';
import { AboutUsPageModule } from '../pages/about-us/about-us.module';
import { FaqPage } from '../pages/faq/faq';
import { AboutUsPage } from '../pages/about-us/about-us';
import { BulletinPageModule } from '../pages/bulletin/bulletin.module';
import { BulletinPage } from '../pages/bulletin/bulletin';
import { FeedbackPageModule } from '../pages/feedback/feedback.module';
import { FeedbackPage } from '../pages/feedback/feedback';
import { DrugSubCategoryPage } from '../pages/drug-sub-category/drug-sub-category';
import { DrugSubCategoryPageModule } from '../pages/drug-sub-category/drug-sub-category.module';

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
    DrugsPageModule,
    DrugCatergoryPageModule,
    ResetPasswordPageModule,
    NotificationsPageModule,
    FaqPageModule,
    AboutUsPageModule,
    BulletinPageModule,
    FeedbackPageModule,
    DrugSubCategoryPageModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    HomePage,
    DrugsPage,
    DrugCatergoryPage,
    ResetPasswordPage,
    NotificationsPage,
    FaqPage,
    AboutUsPage,
    BulletinPage,
    FeedbackPage,
    DrugSubCategoryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseServiceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}        
  ]
})
export class AppModule {}
