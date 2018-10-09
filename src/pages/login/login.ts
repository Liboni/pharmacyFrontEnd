import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';
import { FormGroup, FormControl, Validators, FormBuilder, } from '@angular/forms';
import { RegisterPage } from '../register/register';
import { ResetPasswordPage } from '../reset-password/reset-password';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {} as User
  loading: boolean = false;
  loginForm: FormGroup;

  constructor(public firebaseService: FirebaseServiceProvider,
    public formbuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams, public afAuth: AngularFireAuth, public alertCtrl: AlertController) {
    this.afAuth.auth.signOut();
    this.loginForm = formbuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[^ @]*@[^ @]*')])),
      password: new FormControl('', Validators.required)
    });
  }

  async onSubmit(user: User) {
    try {
      this.loading = true;
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      if (result) {
        this.firebaseService.getUsers().valueChanges().subscribe(response => {
          const index: number = response.indexOf(response.filter(res => res.UID==result.user.uid)[0])
         if(index<0){
          this.alertCtrl.create({
            title: 'Failed',
            subTitle: "Your account was deactivated",
            buttons: ['OK']
          }).present();
         } else{            
            this.loading = false;
            this.navCtrl.setRoot(HomePage)
          }        
        }, error => {
          this.alertCtrl.create({
            title: 'Failed',
            subTitle: error.message,
            buttons: ['OK']
          }).present();
        });
      }
    } catch (e) {
      this.loading = false;
      const alert = this.alertCtrl.create({
        title: 'Failed',
        subTitle: e.message,
        buttons: ['OK']
      });
      alert.present();
    }
  }
  register() {
    this.navCtrl.push(RegisterPage)
  }

  resetPwd() {
    this.navCtrl.push(ResetPasswordPage)
  }
}
