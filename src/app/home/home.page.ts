import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimationController, ToastController } from '@ionic/angular';
import { GlobalService } from '../Servicios/global.service';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@awesome-cordova-plugins/native-geocoder/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  lat: any;
  long: any;
  address: any;



  constructor(private router: Router, private activeroute: ActivatedRoute, private animationCtrl: AnimationController, private global: GlobalService, private geolocation: Geolocation, private nativeGeocoder: NativeGeocoder, private toastCtrl: ToastController) {
    this.router.navigate(["/home/BuscarTransporte"])
    this.obtenerCoords();
  }

  options: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };

  GeolocationOptions = {
    enableHighAccuracy: true
  };

  segmentChanged($event) {
    let segmento = $event.detail.value;
    console.log('/home/' + segmento);
    this.router.navigate(['/home/' + segmento]);
  }

  cerrarSesion() {
    localStorage.removeItem('ingresado')
  }

  obtenerCoords() {
    this.geolocation.getCurrentPosition(this.GeolocationOptions).then((resp) => {
      let direccion = 'C. Barros Arana 1754, 2540000 Quilpué, Valparaíso';
      this.lat = resp.coords.latitude
      this.long = resp.coords.longitude
      this.obtenerDireccion(this.lat,this.long);
      this.obtenerCoordsDir(direccion);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  obtenerDireccion(lat, long) {
    this.nativeGeocoder.reverseGeocode(lat, long, this.options)
  .then((result: NativeGeocoderResult[]) => this.presentToast('Te encuentras en' + JSON.stringify(result[0].countryName) + " " + JSON.stringify(result[0].locality) + " " + JSON.stringify(result[0].subLocality),6000))
  .catch((error: any) => console.log(error));
  }

  obtenerCoordsDir(direccion){
    this.nativeGeocoder.forwardGeocode(direccion)
  .then((result: NativeGeocoderResult[]) => console.log('The coordinates are latitude=' + result[0].latitude + ' and longitude=' + result[0].longitude))
  .catch((error: any) => console.log(error));
  }

  async presentToast(msg: string, duracion?: number) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: duracion ? duracion : 2000
    });
    toast.present();
  }
}
