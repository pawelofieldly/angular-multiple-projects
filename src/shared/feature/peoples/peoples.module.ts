import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeoplesComponent } from './peoples.component';



@NgModule({
  declarations: [
    PeoplesComponent
  ],
  exports: [
    PeoplesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PeoplesModule { }
