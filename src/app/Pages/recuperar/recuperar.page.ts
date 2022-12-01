import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController, ToastController } from '@ionic/angular';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  @ViewChild('animar1',{read : ElementRef, static: true}) animar1: ElementRef;

  constructor(private animationCtrl : AnimationController, public toastCtrl: ToastController, private router : Router, private emailComposer: EmailComposer) {
   }

  

  correo = ""
  field : string = ""

  ngOnInit() {
  }

  ngAfterViewInit(){
    const animar1 = this.animationCtrl.create()
    .addElement(this.animar1.nativeElement)
    .duration(1500)
    .fromTo('transform', 'translateX(-200px)', 'translateX(0px)')
    .iterations(1)
  
    const animar = this.animationCtrl.create()
      .addAnimation([animar1]);
  
    animar.play()
  }

  validateModel(model: any) {
    for (var [key, value] of Object.entries(model)) {
      if (value == "") {
        this.field = key;
        return false;
      }
    }
    return true;
  }

  async presentToast(msg: string, duracion?: number) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: duracion ? duracion : 2000
    });
    toast.present();
  }

  enviar() {
    if (this.validateModel(this.correo)){
      this.abrirEmail()
      this.router.navigate(["/home"])   
    }
    else{
      this.presentToast("Debes ingresar tu " + this.field,3000)
    }
  }
  
  abrirEmail(){

    let email = {
      to: this.correo,
      subject: 'Prueba moviles',
      body: 'La idea era mandar una pass',
      isHtml: true
    }

    this.emailComposer.open(email);
  }
}
