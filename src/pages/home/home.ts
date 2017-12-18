import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SustitucionPage } from '../sustitucion/sustitucion';
import { ReduccionPage } from '../reduccion/reduccion';
import { IgualacionPage } from '../igualacion/igualacion';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  

  constructor(public navCtrl: NavController) {
  }


  sustitucion(){
    this.navCtrl.push(SustitucionPage);
  }

  reduccion(){
    this.navCtrl.push(ReduccionPage);
  }

  igualacion(){
    this.navCtrl.push(IgualacionPage);
  }



  
}
