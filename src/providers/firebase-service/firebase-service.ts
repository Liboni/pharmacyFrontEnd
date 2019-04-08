import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
const USERNAME = 'USERNAME';
const NAME = 'NAME';

@Injectable()
export class FirebaseServiceProvider {
  constructor(public db: AngularFireDatabase) {
  }

  sendFeedback(username, message, datecreated) {
    this.db.list('/feedback/').push({
      username: username,
      message: message,
      datecreated: datecreated
    });
  }

  public getUsername():string {
    return localStorage.getItem(USERNAME);
  }
  
  public getName():string {
    return localStorage.getItem(NAME);
  }

  public saveName(token: string) {
    localStorage.removeItem(NAME);
    localStorage.setItem(NAME, token);  
  }

  public saveUsername(token: string) {
    localStorage.removeItem(USERNAME);
    localStorage.setItem(USERNAME, token);  
  }

  signOut() {
    localStorage.removeItem(USERNAME);
    localStorage.removeItem(NAME);
    localStorage.clear();
  }

  getBulletins():any{
    return this.db.list('/bulletin/');
  }

  getUsers():any{
    return this.db.list('/users/');
  }

  getReplies():any{
    return this.db.list('/replies/');
  }

  getFeedback():any{
   this.db.database.ref("feedback").orderByKey()
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
