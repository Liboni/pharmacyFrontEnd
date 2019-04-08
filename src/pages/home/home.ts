import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public firebaseService: FirebaseServiceProvider, public navCtrl: NavController, public afAuth: AngularFireAuth, private toast: ToastController) {
  }

  ionViewWillLoad() {
    if (this.firebaseService.getUsername()) {
      this.toast.create({
        message: 'Welcome to Pharmaceutical Medicine, ' + this.firebaseService.getName(),
        duration: 3000
      }).present(); 
    }
    else {

      this.afAuth.authState.subscribe(data => {
        if (data && data.email && data.uid) {
          this.firebaseService.getUsers().valueChanges().subscribe(response => {
            if (response) {
              const index: number = response.indexOf(response.filter(res => res.UID == data.uid)[0])
              this.firebaseService.saveName(response[index].Fullname);
              this.firebaseService.saveUsername(data.email);
              this.toast.create({
                message: 'Welcome to Pharmaceutical Medicine, ' + response[index].Fullname,
                duration: 3000
              }).present();
            }
            else {
              this.afAuth.auth.signOut();
              this.navCtrl.setRoot(LoginPage);
              this.toast.create({
                message: 'Could not find authentication details',
                duration: 3000
              }).present();
            }
          }, error => {
            this.afAuth.auth.signOut();
            this.navCtrl.setRoot(LoginPage);
            this.toast.create({
              message: error.message,
              duration: 3000
            }).present();
          });
        }
        else {
          this.afAuth.auth.signOut();
          this.navCtrl.setRoot(LoginPage);
          this.toast.create({
            message: 'Could not find authentication details',
            duration: 3000
          }).present();
        }
      });
    }
  }
}
