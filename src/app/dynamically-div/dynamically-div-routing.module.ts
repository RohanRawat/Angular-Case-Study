import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicallyDivComponent } from './dynamically-div.component';

const routes: Routes = [{ path: '', component: DynamicallyDivComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicallyDivRoutingModule { }
