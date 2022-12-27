import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';
import { StorageService } from 'src/app/Servicios/storage.service';
import { Router, NavigationExtras } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { TimezoneapiService } from 'src/app/Servicios/timezoneapi.service';
import { FirebaseService } from 'src/app/Servicios/firebase.service';


@Component({
  selector: 'app-crear-viaje',
  templateUrl: './crear-viaje.component.html',
  styleUrls: ['./crear-viaje.component.scss'],
})
export class CrearViajeComponent implements OnInit {

  formViaje: FormGroup;
  // @ViewChild('mapDiv')
  // mapDivElement! : ElementRef

  // public map: mapboxgl.Map;
  // style = 'mapbox://styles/mapbox/streets-v12';
  // lat = -33.03372684534958;
  // lng = -71.53319684228958;
  constructor(private storage: StorageService, private router: Router, private fb: FormBuilder, private tz: TimezoneapiService, private firebase: FirebaseService) {
    this.formViaje = this.fb.group({
      'Capacidad': [1, Validators.compose([Validators.required, Validators.min(1), Validators.max(8)])],
      'Matricula': ["", Validators.compose([Validators.required, Validators.pattern(/^[A-Z]{2}[\-]{1}[0-9A-Z]{2}[\-]{1}[0-9A-Z]{2}$/)])],
      'Salida': new FormControl("",Validators.required),
      'Costo': [500, Validators.compose([Validators.required, Validators.min(500), Validators.max(3500)])],
      'Destino': new FormControl("",Validators.required)
    })
  }
    
  id_viaje : any;

  getViajes(){
    this.firebase.obtenerViajes()
  }

  crearViaje(){
    if(this.formViaje.invalid){
      console.log("invalido");
    }
    else{
      const id = this.firebase.crearID();
      this.id_viaje = id;
      let navigationExtras : NavigationExtras ={
        state: {
          dato : this.id_viaje
        }
      }
      const f = this.formViaje.value;
      const capacidad = f.Capacidad;
      const matricula = f.Matricula;
      const salida = f.Salida;
      const costo = f.Costo;
      const destino = f.Destino;
      this.firebase.crearViaje({id,capacidad, matricula, salida, costo, destino},"Viajes", id)
      // this.router.navigate(['/viaje'], navigationExtras)
    }

  }
  
  get capacidadField(){
    return this.formViaje.get('Capacidad');
  }

  get capacidadFieldIsValid(){
    return this.capacidadField.touched && this.capacidadField.valid;
  }
  
  get capacidadFieldIsInvalid(){
    return this.capacidadField.touched && this.capacidadField.invalid;
  }

  get matriculaField(){
    return this.formViaje.get('Matricula');
  }

  get matriculaFieldIsValid(){
    return this.matriculaField.touched && this.matriculaField.valid;
  }
  
  get matriculaFieldIsInvalid(){
    return this.matriculaField.touched && this.matriculaField.invalid;
  }

  get salidaField(){
    return this.formViaje.get('Salida');
  }

  get salidaFieldIsValid(){
    return this.salidaField.touched && this.salidaField.valid;
  }
  
  get salidaFieldIsInvalid(){
    return this.salidaField.touched && this.salidaField.invalid;
  }

  get costoField(){
    return this.formViaje.get('Costo');
  }

  get costoFieldIsValid(){
    return this.costoField.touched && this.costoField.valid;
  }
  
  get costoFieldIsInvalid(){
    return this.costoField.touched && this.costoField.invalid;
  }

  get destinoField(){
    return this.formViaje.get('Destino');
  }

  get destinoFieldIsValid(){
    return this.destinoField.touched && this.destinoField.valid;
  }
  
  get destinoFieldIsInvalid(){
    return this.destinoField.touched && this.destinoField.invalid;
  }









  // getFechas(){
  //   return this.tz.getTimeZone().subscribe((data) =>{
  //     this.zonahoraria = data.datetime
  //     this.fechaHoyApi = new Date(this.zonahoraria);
  //     let f = this.formViaje.value;
  //     this.salida = f.Salida;
  //     var fechaHoyHoraLocal = new Date();
  //     this.fechaactual = fechaHoyHoraLocal.getDate();
  //     this.mesactual = fechaHoyHoraLocal.getMonth() + 1;
  //     this.anoactual = fechaHoyHoraLocal.getFullYear();
      
  //     this.nuevaFecha = new Date(this.anoactual.toString() + " " + this.mesactual.toString() + " " + this.fechaactual.toString() + " " + this.salida)

  //     if(this.nuevaFecha<=this.fechaHoyApi){
  //       this.horavalida = false;
  //     }
  //     if(this.nuevaFecha>this.fechaHoyApi){
  //       this.horavalida = true;
  //     }
  //   }) 
  // }

  ngOnInit() {
    
  }

}
  //   this.map = new mapboxgl.Map({
  //     accessToken: environment.MAPBOX_KEY,
  //     container: this.mapDivElement.nativeElement,
  //     style: this.style,
  //     zoom: 15,
  //     center: [this.lng, this.lat]
  // });
  // this.map.addControl(new mapboxgl.NavigationControl());




