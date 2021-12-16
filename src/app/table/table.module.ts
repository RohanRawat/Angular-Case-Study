import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './table.component';

import { SortButtonComponent } from './sort-button/sort-button.component';

@NgModule({
  declarations: [TableComponent, SortButtonComponent],
  imports: [CommonModule, TableRoutingModule],
})
export class TableModule {}
