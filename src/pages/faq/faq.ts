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
        name:"What do you2?",
        content:"The Pharmacy Department does not stock TB medication2. Patients that need to be initiated are ordered for on the forms provided located in the wards"
       },
       {
        name:"What do you3?",
        content:"The Pharmacy Department does not stock TB medication3. Patients that need to be initiated are ordered for on the forms provided located in the wards"
       },
       {
        name:"What do you4?",
        content:"The Pharmacy Department does not stock TB medication4. Patients that need to be initiated are ordered for on the forms provided located in the wards"
       },
    ];
    content:number=-1;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }
  showMore(index){
    if(index==this.content){
      this.content=0
    }
    else{
      this.content=index
    }
     
  }
}
