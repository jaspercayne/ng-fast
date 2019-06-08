import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgmaterialComponent } from './ngmaterial.component';

const routes: Routes = [{ path: '', component: NgmaterialComponent }];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class NgMaterialRoutingModule {}
