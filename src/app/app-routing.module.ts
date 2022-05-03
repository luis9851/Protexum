import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, Router } from '@angular/router';
import { UserGuardGuard } from '../app/user-guard.guard';



const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },

  {
    path: 'home/:id',
    canActivate: [UserGuardGuard],
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'user/:id',
    canActivate: [UserGuardGuard],
    loadChildren: () => import('./user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'editar-user/:id',
    canActivate: [UserGuardGuard],
    loadChildren: () => import('./editar-user/editar-user.module').then( m => m.EditarUserPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registroclients',
    canActivate: [UserGuardGuard],
    loadChildren: () => import('./registroclients/registroclients.module').then( m => m.RegistroclientsPageModule)
  },
  {
    path: 'registropersonal',
    canActivate: [UserGuardGuard],
    loadChildren: () => import('./registropersonal/registropersonal.module').then( m => m.RegistropersonalPageModule)
  },
  {
    path: 'list-clients',
    canActivate: [UserGuardGuard],
    loadChildren: () => import('./list-clients/list-clients.module').then( m => m.ListClientsPageModule)
  },
  {
    path: 'client/:id',
    canActivate: [UserGuardGuard],
    loadChildren: () => import('./client/client.module').then( m => m.ClientPageModule)
  },
  {
    path: 'olvidastecontrasena',
    loadChildren: () => import('./olvidastecontrasena/olvidastecontrasena.module').then( m => m.OlvidastecontrasenaPageModule)
  },
  {
    path: 'recuperarcontrasena/:token',
    loadChildren: () => import('./recuperarcontrasena/recuperarcontrasena.module').then( m => m.RecuperarcontrasenaPageModule)
  },
  {
    path: 'registroservices/:id',
    canActivate: [UserGuardGuard],
    loadChildren: () => import('./registroservices/registroservices.module').then( m => m.RegistroservicesPageModule)
  },
  {
    path: 'list-services',
    canActivate: [UserGuardGuard],
    loadChildren: () => import('./list-services/list-services.module').then( m => m.ListServicesPageModule)
  },
  {
    path: 'services/:id',
    canActivate: [UserGuardGuard],
    loadChildren: () => import('./services.pages/services.module').then( m => m.ServicesPageModule)
  },
  {
    path: 'editar-service/:id',
    canActivate: [UserGuardGuard],
    loadChildren: () => import('./editar-service/editar-service.module').then( m => m.EditarServicePageModule)
  },
  {
    path: 'equiporecibido/:id',
    canActivate: [UserGuardGuard],
    loadChildren: () => import('./equiporecibido/equiporecibido.module').then( m => m.EquiporecibidoPageModule)
  },
  {
    path: 'editar-equip/:id',
    canActivate: [UserGuardGuard],
    loadChildren: () => import('./editar-equip/editar-equip.module').then( m => m.EditarEquipPageModule)
  },

  {
    path: 'borrow',
    canActivate: [UserGuardGuard],
    loadChildren: () => import('./borrow/borrow.module').then( m => m.BorrowPageModule)
  },
  {
    path: 'editar-borrow/:id',
    canActivate: [UserGuardGuard],
    loadChildren: () => import('./editar-borrow/editar-borrow.module').then( m => m.EditarBorrowPageModule)
  },
  {
    path: 'table-control/:id',
    canActivate: [UserGuardGuard],
    loadChildren: () => import('./table-control/table-control.module').then( m => m.TableControlPageModule)
  },
  {
    path: 'registroprestamos/:id',
    canActivate: [UserGuardGuard],
    loadChildren: () => import('./registroprestamos/registroprestamos.module').then( m => m.RegistroprestamosPageModule)
  },
  {
    path: 'main',
    canActivate: [UserGuardGuard],
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'table/:id',
    canActivate: [UserGuardGuard],
    loadChildren: () => import('./table/table.module').then( m => m.TablePageModule)
  },
  {
    path: 'nomina',
    canActivate: [UserGuardGuard],
    loadChildren: () => import('./nomina/nomina.module').then( m => m.NominaPageModule)
  },
  {
    path: 'pase-lista',
    canActivate: [UserGuardGuard],
    loadChildren: () => import('./pase-lista/pase-lista.module').then( m => m.PaseListaPageModule)
  },


  











]
@NgModule({
  imports: [
 
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}