import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Animation, AnimationController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{

  @ViewChild('animar1',{read : ElementRef, static: true}) animar1: ElementRef;

  user:any;

  constructor(private router: Router, private activeroute: ActivatedRoute, private animationCtrl: AnimationController) {
   /* this.activeroute.queryParams.subscribe(params => { 
      if (this.router.getCurrentNavigation().extras.state) { 
        this.user = this.router.getCurrentNavigation().extras.state.user; 
        this.router.navigate(["/home/BuscarTransporte"])
      }else{this.router.navigate(["/login"])} 
    });*/
  }

/*  ngAfterViewInit(){
    const animar1 = this.animationCtrl.create()
    .addElement(this.animar1.nativeElement)
    .duration(1500)
    .fromTo('transform', 'translateX(-200px)', 'translateX(0px)')
    .iterations(1)
  
    const animar = this.animationCtrl.create()
      .addAnimation([animar1]);
  
    animar.play()
  
  }*/

  segmentChanged($event){
    let segmento=$event.detail.value;
    console.log('/home/'+segmento);
    this.router.navigate(['/home/'+segmento]);
  }
}
