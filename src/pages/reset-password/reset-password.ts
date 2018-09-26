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

  async onSubmit(value) {
    try{
     await this.afAuth.auth.sendPasswordResetEmail(value.email);         
          let alert = this.alertCtrl.create({
            title: 'Success',
            message: "Password reset success, check your email to change your password.",
            buttons: ['OK']
          });
          alert.present();
          this.afAuth.auth.signOut();
        this.navCtrl.setRoot(LoginPage);        
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
}
