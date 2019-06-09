import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { FirebaseRoutingModule } from './firebase-routing.module';
import { FirebaseComponent } from './firebase.component';

@NgModule({
  imports: [CommonModule, FirebaseRoutingModule, MaterialModule],
  declarations: [FirebaseComponent]
})
export class FirebaseModule {}
