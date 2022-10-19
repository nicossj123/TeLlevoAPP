import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/Servicios/storage.service';
import { ApiserviceService } from 'src/app/Servicios/apiservice.service';

@Component({
  selector: 'app-buscar-tansporte',
  templateUrl: './buscar-tansporte.component.html',
  styleUrls: ['./buscar-tansporte.component.scss'],
})
export class BuscarTansporteComponent implements OnInit {

  
  constructor(private storage: StorageService, private api: ApiserviceService) { }
  

  ngOnInit() {
    this.getUsers();
    this.getUser();
    console.log(this.user)
  }

  user : any;
  users : any;
  usuarios : any[]=[];

  getUser(){
    this.user = this.storage.obtenerItem();
  }


  getUsers(){
    this.api.getUsuarios().subscribe((data)=>{
      this.users=data;
      this.usuarios=this.users.alumnos     
    });
  }

}
