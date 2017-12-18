import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { IgualacionDesarrolloPage } from '../igualacion-desarrollo/igualacion-desarrollo';
import { IgualacionEjemploPage } from '../igualacion-ejemplo/igualacion-ejemplo';

/**
 * Generated class for the IgualacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-igualacion',
  templateUrl: 'igualacion.html',
})
export class IgualacionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IgualacionPage');
  }

  igualaciondesarrollo(){
    this.navCtrl.push(IgualacionDesarrolloPage);
  }

  igualacionejemplo(){
    this.navCtrl.push(IgualacionEjemploPage);
  }
}
