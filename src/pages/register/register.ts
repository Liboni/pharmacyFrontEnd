import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../models/user';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  user = {} as User
  loading:boolean=false;
  registerForm:FormGroup;
  constructor(public alertCtrl: AlertController, public formbuilder:FormBuilder,public navCtrl: NavController, public navParams: NavParams, public afAuth: AngularFireAuth) {
    this.registerForm = formbuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[^ @]*@[^ @]*')])),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
      
   },
   {validator: this.checkPasswords });
  }
  checkPasswords(group: FormGroup) { 
  let pass = group.controls.password.value;
  let confirmPass = group.controls.confirmPassword.value;
  return pass === confirmPass ? null : { notSame: true }     
}

  async onSubmit(user:User){
    try{
      const result = await  this.afAuth.auth.createUserWithEmailAndPassword(user.email,user.password);
      if(result){        
        this.loading=false;
        const alert = this.alertCtrl.create({
          title: 'Success',
          subTitle: "Registration successful, continue and sign in",
          buttons: ['OK']
        });
        alert.present();
        this.navCtrl.setRoot(LoginPage)
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
}
