import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarTransporteComponent } from '../Components/buscar-transporte/buscar-transporte.component';
import { LlevarAlumnoComponent } from '../Components/llevar-alumno/llevar-alumno.component';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'BuscarTransporte',
        component: BuscarTransporteComponent
      },
      {
        path: 'LlevarAlumno',
        component: LlevarAlumnoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }



