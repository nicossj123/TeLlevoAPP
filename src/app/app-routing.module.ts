import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoGuard } from './Guards/ingresado.guard';
import { NoIngresadoGuard } from './Guards/no-ingresado.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./Pages/login/login.module').then( m => m.LoginPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [IngresadoGuard]
   
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./Pages/recuperar/recuperar.module').then( m => m.RecuperarPageModule)
   
    
  },
  {
    path: '**',
    loadChildren: () => import('./Pages/not-found/not-found.module').then( m => m.NotFoundPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./Pages/mapa/mapa.module').then( m => m.MapaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
