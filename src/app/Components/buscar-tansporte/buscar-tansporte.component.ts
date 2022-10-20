import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/Servicios/storage.service';
import { ApiserviceService } from 'src/app/Servicios/apiservice.service';
import { Storage } from '@ionic/storage-angular';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-buscar-tansporte',
  templateUrl: './buscar-tansporte.component.html',
  styleUrls: ['./buscar-tansporte.component.scss'],
})
export class BuscarTansporteComponent implements OnInit {


  constructor(private storageService: StorageService, private api: ApiserviceService, private storage: Storage, private toastCtrl: ToastController) { }


  ngOnInit() {
    this.getUsers();
    
  }

  ionViewWillEnter(){
    this.getUser();
  }

  user: any;
  users: any;
  usuarios: any[] = [];

  getUser() {
    this.storage.get('usuario').then((result => {
      this.presentToast('Bienvenido ' + result.nombre, 5000)
    }))

  }


  getUsers() {
    this.api.getUsuarios().subscribe((data) => {
      this.users = data;
      this.usuarios = this.users.alumnos
    });
  }

  async presentToast(msg: string, duracion?: number) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: duracion ? duracion : 2000
    });
    toast.present();
  }

}
