import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';

@IonicPage()
@Component({
  selector: 'page-drugs',
  templateUrl: 'drugs.html',
})
export class DrugsPage {
  drugs: any;
  storedrugs: any;
  search: any;
  loading:boolean = true;
  constructor(public loadingCtrl: LoadingController,
    public navCtrl: NavController, public navParams: NavParams, public firebaseService: FirebaseServiceProvider) {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();
    this.firebaseService.getDrugs().valueChanges().subscribe(result => {
      loading.dismiss();
      if (navParams.get("category")) {
        this.storedrugs = result;
        this.drugs = this.storedrugs.filter((item) => {
          return item.catergory === navParams.get("category");
        });
        this.storedrugs = this.drugs;
      }
      else if (navParams.get("item")) {
        this.storedrugs = result;
        this.drugs = this.storedrugs.filter((item) => {
          return item.subsatergory === navParams.get("item");
        });
        this.storedrugs = this.drugs;
      }
      else {
        this.drugs = result;
        this.storedrugs = result;
      }
    });
  }

  onInput(val) {
    this.loading=false;
    this.drugs = this.storedrugs.filter((item) => {
      return item.name.toLowerCase().indexOf(this.search.toString().toLowerCase()) > -1
        || item.catergory.toLowerCase().indexOf(this.search.toString().toLowerCase()) > -1;
    });
  }

  onCancel($event) {
    this.loading=false;
    this.drugs = this.storedrugs;
  }

}
