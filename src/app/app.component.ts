import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController, ToastController } from 'ionic-angular';
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

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  username:String="";
  pages: Array<{title: string, component: any, icon:any}>;
  loggged:Boolean = false;
  constructor(private toast:ToastController,public firebaseService: FirebaseServiceProvider, public alertCtrl: AlertController,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public afAuth:AngularFireAuth) {
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
      { title: 'About Us', component: AboutUsPage,icon:"information-circle" },
      { title: 'FAQ', component: FaqPage,icon:"help" }
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
    let alert = this.alertCtrl.create({
      title: 'Feedback',
      inputs: [
        {
          name: 'message',
          placeholder: 'Message'
        },       
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {           
          }
        },
        {
          text: 'Send',
          handler: data => {
            let datetime = new Date();
            var day =datetime.getDate()+"-"+datetime.getMonth()+"-"+datetime.getFullYear()+ " "+ datetime.getHours()+":"+datetime.getMinutes()+":"+datetime.getMilliseconds();
            this.firebaseService.sendFeedback(this.username, data.message,day);   
            this.toast.create({
              message:'Thank you for your feedback.',
              duration:3000
            }).present();         
          }
        }
      ]
    });
    alert.present();
  }
  
}
