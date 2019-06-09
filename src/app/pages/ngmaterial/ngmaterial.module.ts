import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { NgMaterialRoutingModule } from './ngmaterial-routing.module';
import { NgmaterialComponent } from './ngmaterial.component';

@NgModule({
  imports: [CommonModule, NgMaterialRoutingModule, MaterialModule],
  declarations: [NgmaterialComponent]
})
export class NgMaterialModule {}
