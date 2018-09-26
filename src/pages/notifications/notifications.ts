import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';

@IonicPage()
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {
  notifications:any;
  constructor(public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams, public firebaseService: FirebaseServiceProvider) {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });      
    loading.present();
    this.firebaseService.getNotifications().valueChanges().subscribe(result => {
    loading.dismiss();
    this.notifications=result;    
    });
  }
}
