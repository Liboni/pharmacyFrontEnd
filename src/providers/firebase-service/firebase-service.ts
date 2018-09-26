import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class FirebaseServiceProvider {
  constructor(public db: AngularFireDatabase) {
  }

 sendFeedback(username, message, datecreated){  
  this.db.list('/feedback/').push({
    username: username,
    message: message,
    datecreated:datecreated
  }); 
 }
  getDrugCatergory() {
      return this.db.list('/drug-catergory/');
  }
  getDrugSubCatergory(catergoryId) {
    return this.db.list('/drug-catergory/drugSubCatergory/' + catergoryId);
  }
  getDrugList(subCatergoryId) {
    return this.db.list('/drug-catergory/drugSubCatergory/drug/' + subCatergoryId);
  }

  getDrugs() {
      return this.db.list('drugs');
  } 

  getNotifications() {
    return this.db.list('notifications');
} 

}
