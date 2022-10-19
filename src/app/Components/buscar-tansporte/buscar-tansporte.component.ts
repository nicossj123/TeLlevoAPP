import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/Servicios/storage.service';
import { ApiserviceService } from 'src/app/Servicios/apiservice.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-buscar-tansporte',
  templateUrl: './buscar-tansporte.component.html',
  styleUrls: ['./buscar-tansporte.component.scss'],
})
export class BuscarTansporteComponent implements OnInit {


  constructor(private storageService: StorageService, private api: ApiserviceService, private storage: Storage) { }


  ngOnInit() {
    this.getUsers();
    this.getUser();
  }

  user: any;
  users: any;
  usuarios: any[] = [];

  getUser() {
    this.storage.get('usuario').then((result => {
      console.log(result)
    }))

  }


  getUsers() {
    this.api.getUsuarios().subscribe((data) => {
      this.users = data;
      this.usuarios = this.users.alumnos
    });
  }

}
