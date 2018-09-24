import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../pages/home/home';
import { DrugCatergoryPage } from '../pages/drug-catergory/drug-catergory';
import { LoginPage } from '../pages/login/login';
import { DrugsPage } from '../pages/drugs/drugs';
import { ChatPage } from '../pages/chat/chat';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any, icon:any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public afAuth:AngularFireAuth) {
    this.initializeApp();
    this.afAuth.authState.subscribe(data=>{     
        if(data &&  data.email && data.uid){
          this.rootPage = HomePage;
        }
        else{
          this.rootPage = LoginPage;
        }  
    });
    this.pages = [
      { title: 'Home', component: HomePage,icon:"home" },
      { title: 'Search', component: DrugsPage,icon:"medkit" },
      { title: 'Category', component: DrugCatergoryPage,icon:"apps" }
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
  }
  openPage(page) {    
    this.nav.setRoot(page.component);
  }
  chatPage(){
    this.nav.push(ChatPage);
  }
}
