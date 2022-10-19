import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/Servicios/storage.service';


@Component({
  selector: 'app-crear-viaje',
  templateUrl: './crear-viaje.component.html',
  styleUrls: ['./crear-viaje.component.scss'],
})
export class CrearViajeComponent implements OnInit {

  constructor(private storage: StorageService) { }

  ngOnInit() {
    
  }

  
  

}
