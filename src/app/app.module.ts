import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { IgualacionPage} from '../pages/igualacion/igualacion';
import { SustitucionPage} from '../pages/sustitucion/sustitucion';
import { ReduccionPage} from '../pages/reduccion/reduccion';
import { IgualacionDesarrolloPage } from '../pages/igualacion-desarrollo/igualacion-desarrollo';
import { IgualacionEjemploPage } from '../pages/igualacion-ejemplo/igualacion-ejemplo';
import { ReduccionDesarrolloPage } from '../pages/reduccion-desarrollo/reduccion-desarrollo';
import { ReduccionEjemploPage } from '../pages/reduccion-ejemplo/reduccion-ejemplo';
import { SustitucionDesarrolloPage } from '../pages/sustitucion-desarrollo/sustitucion-desarrollo';
import { SustitucionEjemploPage } from '../pages/sustitucion-ejemplo/sustitucion-ejemplo';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    IgualacionPage,
    ReduccionPage,
    SustitucionPage,
    IgualacionDesarrolloPage,
    IgualacionEjemploPage,
    ReduccionDesarrolloPage,
    ReduccionEjemploPage,
    SustitucionDesarrolloPage,
    SustitucionEjemploPage



  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    IgualacionPage,
    ReduccionPage,
    SustitucionPage,
    IgualacionDesarrolloPage,
    IgualacionEjemploPage,
    ReduccionDesarrolloPage,
    ReduccionEjemploPage,
    SustitucionDesarrolloPage,
    SustitucionEjemploPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
