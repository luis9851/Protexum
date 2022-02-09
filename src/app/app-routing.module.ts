import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, Router } from '@angular/router';


const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'olvidastecontrasena',
    pathMatch: 'full'
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'user/:id',
    loadChildren: () => import('./user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'editar-user/:id',
    loadChildren: () => import('./editar-user/editar-user.module').then( m => m.EditarUserPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registroclients',
    loadChildren: () => import('./registroclients/registroclients.module').then( m => m.RegistroclientsPageModule)
  },
  {
    path: 'registropersonal',
    loadChildren: () => import('./registropersonal/registropersonal.module').then( m => m.RegistropersonalPageModule)
  },
  {
    path: 'list-clients',
    loadChildren: () => import('./list-clients/list-clients.module').then( m => m.ListClientsPageModule)
  },
  {
    path: 'client/:id',
    loadChildren: () => import('./client/client.module').then( m => m.ClientPageModule)
  },
  {
    path: 'editar-client/:id',
    loadChildren: () => import('./editar-client/editar-client.module').then( m => m.EditarClientPageModule)
  },
  {
    path: 'olvidastecontrasena',
    loadChildren: () => import('./olvidastecontrasena/olvidastecontrasena.module').then( m => m.OlvidastecontrasenaPageModule)
  },
  {
    path: 'recuperarcontrasena/:token',
    loadChildren: () => import('./recuperarcontrasena/recuperarcontrasena.module').then( m => m.RecuperarcontrasenaPageModule)
  },








];

@NgModule({
  imports: [
 
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
