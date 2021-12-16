
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-rendered',
  templateUrl: './product-rendered.component.html',
  styleUrls: ['./product-rendered.component.scss'],
})
export class ProductRenderedComponent implements OnInit {
  @Input() product: any;
  
  constructor() {}

  ngOnInit(): void {}
}
