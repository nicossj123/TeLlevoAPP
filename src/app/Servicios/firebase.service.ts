import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';





@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private firestore: AngularFirestore) {}

  crearID(){
    return this.firestore.createId();
  }

  crearViaje(data:any, path: string, id: string){
    const collection = this.firestore.collection(path);
    return collection.doc(id).set(data);
  }

  obtenerViajes(){
    const collection = this.firestore.collection('Viajes');
    return collection.valueChanges();
  }

  async obtenerViaje(id){
    try{
      return await this.firestore.collection('Viajes').doc(id).get();
    }
    catch(error){
      console.log(error)
    }
  }

}
