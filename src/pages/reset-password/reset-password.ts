import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { LoginPage } from '../login/login';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPasswordPage {
  loading:boolean=false;
  resetForm:FormGroup;
  constructor(public afAuth:AngularFireAuth, public alertCtrl: AlertController,public formbuilder:FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
    this.resetForm = formbuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[^ @]*@[^ @]*')]))          
   });
  }

  resetPwd() {
    if (!this.resetForm.valid){
      console.log(this.resetForm.value);
    } else {
      this.afAuth.auth.sendPasswordResetEmail(this.resetForm.value.email).then( result => {
        this.navCtrl.setRoot(LoginPage);
      }, error => {    
          let alert = this.alertCtrl.create({
            message: error.message,
            buttons: [
              {
                text: "Ok",
                role: 'cancel'
              }
            ]
          });
          alert.present();
        });   
    }
  }

}
