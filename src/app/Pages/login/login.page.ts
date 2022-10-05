import { AfterViewInit, Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Animation, AnimationController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit{

  @ViewChild('animar1',{read : ElementRef, static: true}) animar1 ; ElementRef;

  user = {
    usuario: ""
  }

  field: string = ""
  constructor(private router: Router, private animationCtrl: AnimationController, public toastCtrl: ToastController) { }

  ngOnInit() {
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

  ingresar() {
    if (this.validateModel(this.user)){
      this.presentToast("Has iniciado sesion correctamente", 3000)

      let navigationExtras: NavigationExtras = {
        state: {
          user: this.user 
        }
      };
      this.router.navigate(["/home"], navigationExtras)   
    }
    else{
      this.presentToast("Debes ingresar tu " + this.field,3000)
    }

    
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
}
