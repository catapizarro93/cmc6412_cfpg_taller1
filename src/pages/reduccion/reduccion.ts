import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ReduccionDesarrolloPage } from '../reduccion-desarrollo/reduccion-desarrollo';
import { ReduccionEjemploPage } from '../reduccion-ejemplo/reduccion-ejemplo';
/**
 * Generated class for the ReduccionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reduccion',
  templateUrl: 'reduccion.html',
})
export class ReduccionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReduccionPage');
  }
  reducciondesarrollo(){
    this.navCtrl.push(ReduccionDesarrolloPage);
  }

  reduccionejemplo(){
    this.navCtrl.push(ReduccionEjemploPage);
  }
}

