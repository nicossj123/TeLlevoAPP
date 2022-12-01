import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { throwIfEmpty } from 'rxjs/operators';
import { StorageService } from 'src/app/Servicios/storage.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-crear-viaje',
  templateUrl: './crear-viaje.component.html',
  styleUrls: ['./crear-viaje.component.scss'],
})
export class CrearViajeComponent implements AfterViewInit {

  @ViewChild('mapDiv')
  mapDivElement! : ElementRef

  public map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 33.03370;
  lng = -71.53324;
  constructor(private storage: StorageService, private router: Router) { 
   }

  ngAfterViewInit(): void {
    this.map = new mapboxgl.Map({
      accessToken: environment.MAPBOX_KEY,
      container: this.mapDivElement.nativeElement,      
      style: this.style,
      zoom: 13,
      center: [this.lat, this.lng]
  });
  this.map.addControl(new mapboxgl.NavigationControl());
  }
  }


