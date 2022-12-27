import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/Servicios/storage.service';
import { ApiserviceService } from 'src/app/Servicios/apiservice.service';
import { Storage } from '@ionic/storage-angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/Servicios/firebase.service';

@Component({
  selector: 'app-buscar-tansporte',
  templateUrl: './buscar-tansporte.component.html',
  styleUrls: ['./buscar-tansporte.component.scss'],
})
export class BuscarTansporteComponent implements OnInit {


  constructor(private storageService: StorageService, private api: ApiserviceService, private storage: Storage, private toastCtrl: ToastController, private router: Router, private firebase: FirebaseService) { }


  ngOnInit() {
    this.getViajes();
    
  }

  ionViewWillEnter(){
    this.getUser();
  }


  flag: boolean = true;
  user: any;
  viajes : any;

  getUser() {
    if(this.flag==true){
      this.storage.get('usuario').then((result => {
        this.presentToast('Bienvenido ' + result.nombre, 4000)      
    }))
    }
    this.cambiarFlag();
  } 

  getViajes(){
    this.firebase.obtenerViajes().subscribe(res => 
      this.viajes = res)
  }

  async presentToast(msg: string, duracion?: number) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: duracion ? duracion : 2000
    });
    toast.present();
  }

  cambiarFlag(){
    this.flag = false
  }

}
