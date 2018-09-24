import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { DrugCatergory } from '../../models/drug-catergory';

@Injectable()
export class FirebaseServiceProvider {
  drugCatergory: DrugCatergory;
  constructor(public db: AngularFireDatabase) {
    // this.afd.list('/drugs/').push({
    //   name: "Caffeine, Bioplus Tonic",
    //   quantity: 35,
    //   catergory:"Supplements",
    //   subsatergory:"Nutrition"
    // }); 
    //  this.afd.list('/drug-catergory/').push({
    //   name: "Antimicrobials"     
    // });  
    // this.afd.list('/drug-catergory/').push({
    //   name: "Supplements"     
    // });  

    // this.afd.list('/drug-catergory/').push({
    //   name: "Antimicrobials",
    //   drugSubCatergory: [{
    //     name: "Antifungals",
    //     drug: [{
    //       name: "Acyclovir/Zovirax 5% Cream 10g",
    //       quantity: 5
    //     }, {
    //       name: "Acyclovir 200mg/5ml Suspension",
    //       quantity: 55
    //     }, {
    //       name: "Acyclovir 200mg Tablets",
    //       quantity: 75
    //     }, {
    //       name: "Acyclovir 800mg Tablets, Herpex",
    //       quantity: 55
    //     }, {
    //       name: "Valacyclovir 500mg Tablets, Zelitrex",
    //       quantity: 3
    //     }
    //     ]
    //   },
    //   {
    //     name: "Antivirals",
    //     drug: [{
    //       name: "Amphotericin B 50mg Infusion",
    //       quantity: 5
    //     }, {
    //       name: "Clotrimazole, Candid B Mouth Paint",
    //       quantity: 55
    //     },
    //     {
    //       name: "Clotrimazole Cream",
    //       quantity: 75
    //     },
    //     {
    //       name: "Fluconazole 50mg, 200mg Capsules",
    //       quantity: 55
    //     },
    //     {
    //       name: "Griseofulvin Suspension 125mg/5ml",
    //       quantity: 3
    //     },
    //     ]
    //   },
    //   {
    //     name: "Antibacterials",
    //     drug: [{
    //       name: "Amikacin 500mg, 1g Injection",
    //       quantity: 5
    //     }, {
    //       name: "Amoxycillin 250mg, 500mg Capsules",
    //       quantity: 55
    //     },
    //     {
    //       name: "Amoxycillin 125mg/5ml Suspension",
    //       quantity: 75
    //     },
    //     {
    //       name: "Amoxycillin 125mg with Clavulanic acid 31.25mg/5ml Suspension",
    //       quantity: 55
    //     },
    //     {
    //       name: "Amoxycillin 250mg with Clavulanic acid 62.5mg/5ml Suspension",
    //       quantity: 3
    //     },
    //     ]
    //   },
    //   {
    //     name: "Drugs Used In Malaria",
    //     drug: [{
    //       name: "Quinine Sulphate 300mg Tablets",
    //       quantity: 5
    //     }, {
    //       name: "Quinine di-hydrochloride Injection",
    //       quantity: 55
    //     },
    //     {
    //       name: "Artesunate 25mg Tablet, Asaq",
    //       quantity: 75
    //     },
    //     {
    //       name: "Artesunate 60mg Injection",
    //       quantity: 55
    //     },
    //     {
    //       name: "Artemether 20mg with Lumefantrine Tablets, Coartem",
    //       quantity: 3
    //     },
    //     ]
    //   },
    //   {
    //     name: "Antiretrovirals",
    //     drug: [{
    //       name: "Tenolam-E, Tenofovir 300mg, Lamivudine 300mg, Effavirenz 600mg Tablets",
    //       quantity: 5
    //     }, {
    //       name: "Nevirapine 50mg/5ml Suspension",
    //       quantity: 55
    //     }
    //     ]
    //   }]
    // });

    // this.afd.list('/drug-catergory/').push( {
    //   name: "Supplements",
    //   drugSubCatergory: [{
    //     name: "Nutrition",
    //     drug: [{
    //       name: "Caffeine, Bioplus Tonic",
    //       quantity: 5
    //     }, {
    //       name: "Folic Acid 2.5mg/5ml Solution",
    //       quantity: 55
    //     },
    //     {
    //       name: "Glucose Powder",
    //       quantity: 75
    //     },
    //     {
    //       name: "Fresubin Original Fibre 1000mls Enteral Feed",
    //       quantity: 55
    //     }
    //     ]
    //   },
    //   {
    //     name: "Parenteral Preparations",
    //     drug: [{
    //       name: "Dextrose 50% Injection 20ml, 50ml",
    //       quantity: 5
    //     }, {
    //       name: "Dextrose 10% 1000mls Vacolitre",
    //       quantity: 55
    //     },
    //     {
    //       name: "Mannitol Solution 500ml, 3000ml Vacolitre",
    //       quantity: 75
    //     }]
    //   },
    //   {
    //     name: "Minerals and Vitamins",
    //     drug: [{
    //       name: "Calcium Carbonate 500mg Tablets",
    //       quantity: 5
    //     }, {
    //       name: "Calcium Chloride Injection 10ml Injection",
    //       quantity: 55
    //     }]
    //   }]
    // });

    // this.afd.list('/drug-catergory/').push([{
    //   name: "Antihistamines",
    //   drug: [{
    //     name: "Amphotericin B 50mg Infusion",
    //     quantity: 5
    //   }, {
    //     name: "Clotrimazole, Candid B Mouth Paint",
    //     quantity: 55
    //   },
    //   {
    //     name: "Clotrimazole Cream",
    //     quantity: 75
    //   },
    //   {
    //     name: "Fluconazole 50mg, 200mg Capsules",
    //     quantity: 55
    //   },
    //   {
    //     name: "Griseofulvin Suspension 125mg/5ml",
    //     quantity: 3
    //   },
    //   ]
    // }]);

    // this.afd.list('/drug-catergory/').push({
    //   name: "Analgesics and anti-inflammatories"
    // });
  }

  getDrugCatergory() {
      return this.db.list('/drug-catergory/');
  }
  getDrugSubCatergory(catergoryId) {
    return this.db.list('/drug-catergory/drugSubCatergory/' + catergoryId);
  }
  getDrugList(subCatergoryId) {
    return this.db.list('/drug-catergory/drugSubCatergory/drug/' + subCatergoryId);
  }

  getDrugs() {
      return this.db.list('drugs');
  } 

}
