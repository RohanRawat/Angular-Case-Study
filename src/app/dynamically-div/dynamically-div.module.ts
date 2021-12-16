import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicallyDivRoutingModule } from './dynamically-div-routing.module';
import { DynamicallyDivComponent } from './dynamically-div.component';


@NgModule({
  declarations: [
    DynamicallyDivComponent
  ],
  imports: [
    CommonModule,
    DynamicallyDivRoutingModule
  ]
})
export class DynamicallyDivModule { }
