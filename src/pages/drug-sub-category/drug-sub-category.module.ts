import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DrugSubCategoryPage } from './drug-sub-category';

@NgModule({
  declarations: [
    DrugSubCategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(DrugSubCategoryPage),
  ],
})
export class DrugSubCategoryPageModule {}
