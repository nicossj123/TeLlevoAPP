import { AfterViewInit, Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Animation, AnimationController, ToastController } from '@ionic/angular';
import { ApiserviceService } from 'src/app/Servicios/apiservice.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { StorageService } from 'src/app/Servicios/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('animar1', { read: ElementRef, static: true }) animar1; ElementRef;

  formularioLogin: FormGroup;

  users: any;
  usuarios: any[] = [];


  field: string = ""
  constructor(private router: Router, private animationCtrl: AnimationController, public toastCtrl: ToastController, private api: ApiserviceService, public fb: FormBuilder, private alertController: AlertController, private storage: StorageService) {
    this.formularioLogin = this.fb.group({
      'usuario': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required)
    })
  }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Datos incompletos',
      subHeader: 'Debes llenar todos los campos',
      buttons: ['Aceptar']
    })
    await alert.present();
  }

  ingresar() {

    this.api.getUsuarios().subscribe((data) => {
      this.users = data
    });

    this.usuarios = this.users.alumnos

    var f = this.formularioLogin.value;

    if (this.formularioLogin.invalid) {
      this.presentAlert();
    }

    var user = {
      usuario: f.usuario,
      password: f.password
    }

    const resultado = this.usuarios.find(element => element.username === user.usuario && element.password === user.password);
    console.log(resultado)

    if (resultado == undefined) {
      this.presentToast("Su usuario o contrase&ntildea no con correctas",)
    } else {
      this.storage.guardarItem('usuario', resultado);
      localStorage.setItem('ingresado', 'true');
      this.router.navigate(['/home/BuscarTransporte']);
    }



    /*if(element.username == user.usuario && element.password == user.password){
      this.presentToast("Usuario encontrao", 4000)
    }else{
      this.presentToast("Su usuario o contrase&ntildea no han sido encontradas", 3000)
      console.log('no')
    }/*
  });


  /*this.storage.guardarItem('user',JSON.stringify(user));*/
  }





  /*Metodo que genera un Toast */
  async presentToast(msg: string, duracion?: number) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: duracion ? duracion : 2000
    });
    toast.present();
  }



  /*validateModel(model: any) {
    for (var [key, value] of Object.entries(model)) {
      if (value == "") {
        this.field = key;
        return false;
      }
    }
    return true;
  }

  /*if (this.validateModel(this.user)) {
    this.presentToast("Has iniciado sesion correctamente", 3000)

    let navigationExtras: NavigationExtras = {
      state: {
        user: this.user
      }
    };
    this.router.navigate(["/home"], navigationExtras)
  }
  else {
    this.presentToast("Debes ingresar tu " + this.field, 3000)
  }*/




  ngAfterViewInit() {
    const animar1 = this.animationCtrl.create()
      .addElement(this.animar1.nativeElement)
      .duration(1500)
      .fromTo('transform', 'translateX(-200px)', 'translateX(0px)')
      .iterations(1)

    const animar = this.animationCtrl.create()
      .addAnimation([animar1]);

    animar.play()
  }

  /*validarUsuario(user: any){
    this.api.getUsuarios().subscribe((data) => {
      this.users = data;
      this.usuarios = this.users.alumnos

      

      
      
      for (var [key,value] of Object.entries(this.usuarios)) {
        if(value==user.usuario){
          user = true;
        }        
        if(value==user.password){
          pass = true;
        }
      };
      
    })
  }
  
  
  function validar(index){
    if(index.nombre && index.password){
      
    }
  }
  */


}
