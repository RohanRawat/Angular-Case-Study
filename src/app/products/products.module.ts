import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductRenderedComponent } from './product-rendered/product-rendered.component';
import { GridOrRowViewOptionComponent } from './grid-or-row-view-option/grid-or-row-view-option.component';
import {SelectOptionsComponent} from './select-options/select-options.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductRenderedComponent,
    GridOrRowViewOptionComponent,
    SelectOptionsComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
