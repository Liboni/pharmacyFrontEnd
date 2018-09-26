import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { LoginPage } from '../login/login';
import { AngularFireAuth } from 'angularfire2/auth';
import { ChangePasswordPage } from '../change-password/change-password';

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
    try{
      this.afAuth.auth.sendPasswordResetEmail(this.resetForm.value.email).then( result => {
        if(result){        
        this.navCtrl.setRoot(ChangePasswordPage);
        }
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
      } catch(e){
        this.loading=false;
        const alert = this.alertCtrl.create({
          title: 'Failed',
          subTitle: e.message,
          buttons: ['OK']
        });
        alert.present();
      }
  }

  changePassword(){
    this.navCtrl.push(ChangePasswordPage);
  }
}
