import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { IonicStorageModule } from '@ionic/storage-angular';
import { HttpClientModule } from '@angular/common/http';

import { NativeGeocoder} from '@awesome-cordova-plugins/native-geocoder/ngx';

import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AngularFireModule } from '@angular/fire/compat'
 
import { CrearViajeComponent } from './Components/crear-viaje/crear-viaje.component';
import { LocationAccuracy } from '@awesome-cordova-plugins/location-accuracy/ngx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [AppComponent, CrearViajeComponent],
  imports: [FormsModule, ReactiveFormsModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot(), HttpClientModule, AngularFireModule.initializeApp(environment.firebaseConfig),AngularFirestoreModule],
  providers: [NativeGeocoder, Geolocation, EmailComposer, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy}, LocationAccuracy],
  bootstrap: [AppComponent],
})
export class AppModule {}
