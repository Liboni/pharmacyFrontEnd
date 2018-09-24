import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DrugCatergoryPage } from './drug-catergory';

@NgModule({
  declarations: [
    DrugCatergoryPage,
  ],
  imports: [
    IonicPageModule.forChild(DrugCatergoryPage),
  ],
})
export class DrugCatergoryPageModule {}
