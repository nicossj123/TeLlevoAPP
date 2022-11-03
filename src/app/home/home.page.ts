import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Animation, AnimationController } from '@ionic/angular';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{

  lat: any; 
  long: any;
  address: any;
  accuracy: any;

  constructor(private router: Router, private activeroute: ActivatedRoute, private animationCtrl: AnimationController, private geolocation: Geolocation, private nativeGeocoder: NativeGeocoder) {
    this.router.navigate(["/home/BuscarTransporte"])
  }
  
   segmentChanged($event){
    let segmento=$event.detail.value;
    console.log('/home/'+segmento);
    this.router.navigate(['/home/'+segmento]);
  }

  cerrarSesion(){
    localStorage.removeItem('ingresado')
  }

  geoInformation() {
    this.geolocation.getCurrentPosition().then((data) => {
      this.lat = data.coords.latitude;
      this.long = data.coords.longitude;
      this.accuracy = data.coords.accuracy;
      console.log('Latitud: ' + this.lat + ' Longitud: ' + this.long)
     })
  } 
}
