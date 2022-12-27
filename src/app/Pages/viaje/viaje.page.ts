import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as mapboxgl from 'mapbox-gl';
import { FirebaseService } from 'src/app/Servicios/firebase.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.page.html',
  styleUrls: ['./viaje.page.scss'],
})
export class ViajePage implements AfterViewInit {

  @ViewChild('mapDiv')
  mapDivElement!: ElementRef

  public map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v12';
  lat = -33.03372684534958;
  lng = -71.53319684228958;
  viaje: any;
  id: any;
  constructor(private route: ActivatedRoute, private router: Router, private firebase: FirebaseService) {
    // this.route.queryParams.subscribe(p => {
    //   if (this.router.getCurrentNavigation().extras.state) {
    //     this.id = this.router.getCurrentNavigation().extras.state.dato;
    //     this.obtenerViaje(this.id);
    //   }
    // })
  }


   ngAfterViewInit():void{
    this.map = new mapboxgl.Map({
      accessToken: environment.MAPBOX_KEY,
      container: this.mapDivElement.nativeElement,
      style: this.style,
      zoom: 15,
      center: [this.lng, this.lat]
    });
    this.map.addControl(new mapboxgl.NavigationControl());
    
  }

  // obtenerViaje(id){
  //   this.firebase.obtenerViaje(id).then((data)=>{
  //     data.subscribe(doc=>{
  //       this.viaje = JSON.stringify(doc.data());
  //       console.log(this.viaje);
  //     })
  //   })
  // }
}
