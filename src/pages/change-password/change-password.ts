import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-change-password',
  templateUrl: 'change-password.html',
})
export class ChangePasswordPage {
  loading:boolean=false;
  changePasswordForm:FormGroup;
  constructor(public alertCtrl: AlertController, public afAuth:AngularFireAuth,public formbuilder:FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
    this.changePasswordForm = formbuilder.group({
      resetCode: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
   });
  }
  onSubmit(value){
    this.afAuth.auth.confirmPasswordReset(value.resetCode,value.password).then( result => {
      if(result){      
        let alert = this.alertCtrl.create({
          title: 'Failed',
          message: "Password success changed",
          buttons: ['OK']
        });
        alert.present();  
      this.navCtrl.setRoot(ChangePasswordPage);
      }
    }, error => {    
        let alert = this.alertCtrl.create({
          title: 'Failed',
          message: error.message,
          buttons: ['OK']
        });
        alert.present();
      }); 
  }
}
