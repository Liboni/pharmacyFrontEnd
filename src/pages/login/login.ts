import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';
import { FormGroup, FormControl, Validators, FormBuilder, } from '@angular/forms';
import { RegisterPage } from '../register/register';
import { ResetPasswordPage } from '../reset-password/reset-password';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {} as User
  loading:boolean=false;
  loginForm:FormGroup;

  constructor(public formbuilder:FormBuilder,public navCtrl: NavController, public navParams: NavParams,public afAuth:AngularFireAuth,public alertCtrl: AlertController) {
    this.loginForm = formbuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[^ @]*@[^ @]*')])),
      password: new FormControl('', Validators.required)
   });
  }
  
  async onSubmit(user:User){  
    try{
      this.loading=true;
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      if(result){        
        this.loading=false;
        this.navCtrl.setRoot(HomePage)
      }            
    }catch(e){
      this.loading=false;
      const alert = this.alertCtrl.create({
        title: 'Failed',
        subTitle: e.message,
        buttons: ['OK']
      });
      alert.present();
    }
  }
  register(){    
    this.navCtrl.push(RegisterPage)
  }
  
  resetPwd(){    
    this.navCtrl.push(ResetPasswordPage)
  }
}
