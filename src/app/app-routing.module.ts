import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'angular',
    loadChildren : () => import('./pages/angular/angular.module').then(m => m.AngularModule)
  },
  {
    path: 'firebase',
    loadChildren : () => import('./pages/firebase/firebase.module').then(m => m.FirebaseModule)
  },
  {
    path: 'ngmat',
    loadChildren : () => import('./pages/ngmaterial/ngmaterial.module').then(m => m.NgMaterialModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
