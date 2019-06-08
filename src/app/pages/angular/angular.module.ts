import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { AngularRoutingModule } from './angular-routing.module';
import { AngularComponent } from './angular.component';

@NgModule({
  imports: [CommonModule, AngularRoutingModule, MaterialModule],
  declarations: [AngularComponent]
})
export class AngularModule {}
