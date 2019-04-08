import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { DrugSubCategoryPage } from '../drug-sub-category/drug-sub-category';

@IonicPage()
@Component({
  selector: 'page-drug-catergory',
  templateUrl: 'drug-catergory.html',
})
export class DrugCatergoryPage {
  drugCatergories: any;
  storedrugs: any;
  search:any;
  constructor(public loadingCtrl: LoadingController,public navCtrl: NavController, public firebaseService: FirebaseServiceProvider) {   
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.firebaseService.getDrugCatergory().valueChanges().subscribe(result => {
      loading.dismiss();
      this.drugCatergories = result;
      this.storedrugs = result;
    });
  }

  itemTapped(item) {   
    this.navCtrl.push(DrugSubCategoryPage, {
      item: item
    });
  }

  onInput(val) {    
    this.drugCatergories = this.storedrugs.filter((item) =>{        
      return item.name.toLowerCase().indexOf(this.search.toString().toLowerCase()) > -1;
    })
  }

  onCancel($event) {
    this.drugCatergories=this.storedrugs;
  }
}
