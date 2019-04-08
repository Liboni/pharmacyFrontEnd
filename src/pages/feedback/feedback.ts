import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {
  private input: string = '';
  public msgs: any[] = [];

  constructor(public loadingCtrl: LoadingController,public firebase: AngularFireDatabase, public firebaseService: FirebaseServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.loadMessages();
  }
 
  loadMessages(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    let user = this.firebaseService.getUsername();
    let msgs = [];
    this.firebaseService.getReplies().valueChanges().subscribe(replies => {
      let result = this.firebase.database.ref("feedback").orderByKey();
      result.once("value").then(function (feedbacks) {
        feedbacks.forEach(function (feedback) {
          let key = feedback.key
          let data = feedback.val();
          if (data.username == user) {
            msgs.push({
              content: data.message,
              from: 'me',
              image:"/assets/imgs/avator/Chloe.png",
              date:data.datecreated
            });
            let reply = replies.filter((item) => {
              return item.ReplyTo.indexOf(key) > -1;
            });
            reply.forEach(function (value) {
              msgs.push({
                content: value.Message,
                from: 'admin',
                image:"/assets/imgs/avator/Bentley.png",
                date:value.DateCreated
              });
            });
          }
        });
        loading.dismiss();
      }, error => {
        loading.dismiss();
        console.log(error);
      });
    }, error => {
      loading.dismiss();
      console.log(error);
    });
    this.msgs=msgs
  }
  doSend() {
    if (this.input.length > 0) {
      this.firebaseService.sendFeedback(this.firebaseService.getUsername(), this.input, this.getDate());
      this.msgs.push({content:this.input,from:"me",   image:"/assets/imgs/avator/Chloe.png",date: this.getDate()});
      this.input="";
    }
  }
  getDate() {
    let datetime = new Date();
    let month = String(datetime.getMonth());
    if (month.length < 2) {
      month = '0' + month;
    }
    let date = String(datetime.getDate());
    if (date.length < 2) {
      date = '0' + date;
    }
    let minutes = String(datetime.getMinutes());
    if (minutes.length < 2) {
      minutes = '0' + minutes;
    }
    let hours = String(datetime.getHours());
    if (hours.length < 2) {
      hours = '0' + hours;
    }
    return date + "/" + month + "/" + datetime.getFullYear() + ", " + hours + ":" + minutes;
  }
}
