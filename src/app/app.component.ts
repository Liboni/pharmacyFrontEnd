import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../pages/home/home';
import { DrugCatergoryPage } from '../pages/drug-catergory/drug-catergory';
import { LoginPage } from '../pages/login/login';
import { DrugsPage } from '../pages/drugs/drugs';
import { NotificationsPage } from '../pages/notifications/notifications';
import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { FaqPage } from '../pages/faq/faq';
import { AboutUsPage } from '../pages/about-us/about-us';
import { BulletinPage } from '../pages/bulletin/bulletin';
import { FeedbackPage } from '../pages/feedback/feedback';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  username:String="";
  pages: Array<{title: string, component: any, icon:any}>;
  loggged:Boolean = false;
  constructor(public firebaseService: FirebaseServiceProvider, public alertCtrl: AlertController,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public afAuth:AngularFireAuth) {
    this.initializeApp();
    this.afAuth.authState.subscribe(data=>{     
        if(data &&  data.email && data.uid){
          this.rootPage = HomePage;
          this.username=data.email
          this.loggged = true;
        }
        else{
          this.rootPage = LoginPage;
          this.loggged = false;
        }  
    });
    this.pages = [
      { title: 'Home', component: HomePage,icon:"home" },
      { title: 'Search', component: DrugsPage,icon:"medkit" },
      { title: 'Category', component: DrugCatergoryPage,icon:"apps" },
      { title: 'Contact', component: AboutUsPage,icon:"contact" },
      { title: 'FAQ', component: FaqPage,icon:"help" },
      { title: 'Bulletin', component: BulletinPage,icon:"book" }
    ];
  }

  initializeApp() {    
     this.platform.ready().then(() => {    
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  signOut(){
    this.afAuth.auth.signOut();
    this.firebaseService.signOut();      
    this.nav.setRoot(LoginPage);
    this.loggged = false;
  }
  changePassword(){
    this.nav.push(ResetPasswordPage,{
      data: "Change Password"
    });
  }
  openPage(page) {    
    this.nav.setRoot(page.component);
  }

  notificationPage(){
    this.nav.push(NotificationsPage);
  }

  feedbackPage(){
   this.nav.push(FeedbackPage);   
  }
}
