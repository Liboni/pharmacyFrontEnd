import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-change-password',
  templateUrl: 'change-password.html',
})
export class ChangePasswordPage {
  loading:boolean=false;
  changePasswordForm:FormGroup;
  constructor(public formbuilder:FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
    this.changePasswordForm = formbuilder.group({
      resetCode: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
   });
  }
  onSubmit(value){

  }
}
