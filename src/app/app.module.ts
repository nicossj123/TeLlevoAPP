import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { IonicStorageModule } from '@ionic/storage-angular';
import { HttpClientModule } from '@angular/common/http';

import { NativeGeocoder} from '@awesome-cordova-plugins/native-geocoder/ngx';

import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

import { CrearViajeComponent } from './Components/crear-viaje/crear-viaje.component';
import { LocationAccuracy } from '@awesome-cordova-plugins/location-accuracy/ngx';
import { FormsModule } from '@angular/forms';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';


@NgModule({
  declarations: [AppComponent, CrearViajeComponent],
  imports: [FormsModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot(), HttpClientModule],
  providers: [NativeGeocoder, Geolocation, EmailComposer, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy}, LocationAccuracy],
  bootstrap: [AppComponent],
})
export class AppModule {}
