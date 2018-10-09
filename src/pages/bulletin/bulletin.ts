import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';

@IonicPage()
@Component({
  selector: 'page-bulletin',
  templateUrl: 'bulletin.html',
})
export class BulletinPage {
  items:any;
  constructor(public firebaseService: FirebaseServiceProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.firebaseService.getBulletins().valueChanges().subscribe(result => {
        this.items=result;
    },error=>{
      console.log(error);
    });
  }

}
