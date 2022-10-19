import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarTansporteComponent } from '../Components/buscar-tansporte/buscar-tansporte.component';
import { CrearViajeComponent } from '../Components/crear-viaje/crear-viaje.component';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path: 'BuscarTransporte',
        component: BuscarTansporteComponent
      },
      {
        path: 'CrearViaje',
        component: CrearViajeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }



