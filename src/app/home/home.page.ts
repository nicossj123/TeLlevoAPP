import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Animation, AnimationController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{

  constructor(private router: Router, private activeroute: ActivatedRoute, private animationCtrl: AnimationController) {
    this.router.navigate(["/home/BuscarTransporte"])
  }
  
   segmentChanged($event){
    let segmento=$event.detail.value;
    console.log('/home/'+segmento);
    this.router.navigate(['/home/'+segmento]);
  }

  cerrarSesion(){
    localStorage.removeItem('ingresado')
  }
}
