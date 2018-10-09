import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-faq',
  templateUrl: 'faq.html',
})
export class FaqPage {
  items:any[]=[
      {
       name:"What do you?",
       content:"The Pharmacy Department does not stock TB medication. Patients that need to be initiated are ordered for on the forms provided located in the wards"
      },
      {
        name:"What do you?",
        content:"The Pharmacy Department does not stock TB medication. Patients that need to be initiated are ordered for on the forms provided located in the wards"
       },
       {
        name:"What do you?",
        content:"The Pharmacy Department does not stock TB medication. Patients that need to be initiated are ordered for on the forms provided located in the wards"
       },
       {
        name:"What do you?",
        content:"The Pharmacy Department does not stock TB medication. Patients that need to be initiated are ordered for on the forms provided located in the wards"
       },
    ];
    content:number=-1;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.items=["Hi", "What do you want to know"]
  }
  showMore(index){
      this.content=index
  }
}
