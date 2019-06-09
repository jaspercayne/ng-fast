import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { paths } from './app.paths';

const routes: Routes = [
  {
    path: paths.home,
    loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: paths.resourcepages.angular,
    loadChildren: () =>
      import('./pages/angular/angular.module').then(m => m.AngularModule)
  },
  {
    path: paths.resourcepages.firebase,
    loadChildren: () =>
      import('./pages/firebase/firebase.module').then(m => m.FirebaseModule)
  },
  {
    path: paths.resourcepages.ngmat,
    loadChildren: () =>
      import('./pages/ngmaterial/ngmaterial.module').then(
        m => m.NgMaterialModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
