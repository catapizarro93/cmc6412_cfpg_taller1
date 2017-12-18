import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SustitucionDesarrolloPage } from '../sustitucion-desarrollo/sustitucion-desarrollo';
import { SustitucionEjemploPage } from '../sustitucion-ejemplo/sustitucion-ejemplo';

/**
 * Generated class for the SustitucionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sustitucion',
  templateUrl: 'sustitucion.html',
})
export class SustitucionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SustitucionPage');
  }

  sustituciondesarrollo(){
    this.navCtrl.push(SustitucionDesarrolloPage);
  }

  sustitucionejemplo(){
    this.navCtrl.push(SustitucionEjemploPage);
  }

}
