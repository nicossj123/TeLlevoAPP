import { Injectable } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { Storage } from '@ionic/storage-angular';
import { Viajes } from '../Interfaces/viajes';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create()
  }

  guardarItem(key, value) {
    this.storage.set(key, value)
  }

  async obtenerItem() {
    return this.storage.get('usuario');
  }

  /*async cargarViajes(listado: any){
    const misViajes= await this.storage.get('Viajes');
    if(misViajes){
      listado=misViajes;
    }
    return listado
  }*/

  /*cargarViajes(){
    let listado = [];
    this.storage.forEach((v,k)=>{listado.push(v);})
    return listado;
  }

  async guardarViaje(capacidad:number, matricula: string, destino: string){  
    let id = await this.viajes.length + 1;

    this.viajes.unshift({
        id : id,
        nmbrCapacidad: capacidad,
        strMatricula: matricula,
        strDestino: destino
      });
      this.storage.set('viajes',this.viajes);
  }*/

}
