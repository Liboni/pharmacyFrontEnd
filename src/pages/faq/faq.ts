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
       name:"If an order is urgent, how can it’s processing be expedited?",
       content:"All orders need to be dispensed off of a prescription. The nurse can call ahead while the script is on it’s way and alert the Pharmacist that they have an urgent order. The order must be written on the front of the script where “Stat doses” are ordered with an urgent order sticker on it. The nurse aide bringing script to Pharmacy will be put to the front of the line and asked to wait while the order is being processed for them to go back with it."
      },
      {
        name:"How long to TTO medications take to process?",
        content:"When TTO scripts arrive at the Pharmacy the lead time for completing them is on average 15 minutes if they are simple, on our medicine list and do not involve compounding. Those that involve compounding will take about 30 minutes."
       },
       {
        name:"If I am not sure of the dose, what do I do?",
        content:"Please contact the pharmacist in the dispensary with the dose calculation you need done and they will gladly assist you."
       },
       {
        name:"How are TED stockings paid for if not covered by Medical Aid?",
        content:"The nurse has to measure the patient’s leg for the appropriate size and this is sent down to Pharmacy to check availability and price. Once the stocking has been identified, the patient relative needs to pay for the stocking at the cashier, hand the receipt over to nursing staff so that the order can be completed."
       },
       {
        name:"If the patient is already on ARV treatment, will the Pharmacy provide?",
        content:"The pharmacy’s ARVs are limited to stocks for Post Exposure Prophylaxis ARV treatment to be used when an member of staff or consultant has been potentially exposed to HIV. If there is an admitted patient who does not have their normal supply of ARVs, the Pharmacy may purchase on their behalf, which payment must be done upfront. For more details please refer to the Purpose section on the Home page."
       },
       {
        name:"If I can’t find stock in the 1 North Emergency Drug Room, what do I do?",
        content:"The 1 North EDR can only carry limited lines of stock. When those stocks run out and more is needed, the Pharmacist on call can come and replenish as needs be. If a stock item that is NOT stocked in EDR is ordered, there may be need to substitute with what is in stock to avert an emergency until the order can be done when the Main Pharmacy is open."
       },
       {
        name:"If the Doctor has prescribed pain medication during the hospital stay and it is not all consumed, can the patient take it home with them?",
        content:"As long as the medication was not stopped for reasons that cause harm to the patient, the medicines can be given to the patient as long as they are still clearly labelled. Please send the pack down to Pharmacy for re-labelling if the label cannot be clearly read."
       }
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
