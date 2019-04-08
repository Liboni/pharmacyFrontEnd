import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { DrugsPage } from '../drugs/drugs';

@IonicPage()
@Component({
  selector: 'page-drug-sub-category',
  templateUrl: 'drug-sub-category.html',
})
export class DrugSubCategoryPage {

  drugs: any;
  storedrugs: any;
  search:any;

  constructor(public navParams: NavParams, public loadingCtrl: LoadingController,public navCtrl: NavController, public firebaseService: FirebaseServiceProvider) {   
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();
    this.firebaseService.getDrugs().valueChanges().subscribe(result => {
      loading.dismiss();
      if (navParams.get("item")) {
        this.storedrugs = result;
        this.drugs = this.storedrugs.filter((item) => {
          return item.catergory === navParams.get("item").name.toString();
        });
        this.drugs=Array.from(new Set(this.drugs.map((item: any) => item.subsatergory))); 
        this.drugs = this.drugs.filter(function (el) {
          return el.replace(/\s/g, "") != "";
        }); 

        if(this.drugs.length<1){
          this.navCtrl.push(DrugsPage, {
            category:navParams.get("item").name.toString()
          });
        }
        this.storedrugs = this.drugs;
      }
      else {
        this.drugs = result;
        this.storedrugs = result;
      }
    });
  }

  itemTapped(item) {   
    this.navCtrl.push(DrugsPage, {
      item: item
    });
  }

  onInput(val) {    
    this.drugs = this.storedrugs.filter((item) =>{        
      return item.toLowerCase().indexOf(this.search.toString().toLowerCase()) > -1;
    })
  }

  onCancel($event) {
    this.drugs=this.storedrugs;
  }

}
