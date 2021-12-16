import { Component, OnDestroy, OnInit } from '@angular/core';

import { first, Subscription } from 'rxjs';
import { APP_ENUM_TYPE, PRODUCT_FILTER } from 'src/app/constants/product.constant';
import { IEventResponse } from 'src/app/interfaces/emitterCallback';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  private _ProductApiSubscription!: Subscription;
  public products = [];
  public filterOptions = PRODUCT_FILTER;
  public uiLayout: string = APP_ENUM_TYPE.GRID_VIEW; //Default view 
  public appEnum = APP_ENUM_TYPE;
  public isApiCallInProgress: boolean = false;

  constructor(
    private _productService: ProductService,
   
  ) { }

  ngOnInit(): void {
    this.getProductListData();
  }

  /**
   * @function getProductList
   * @summary Get Products List Data
   */
  private getProductListData() {
    this.isApiCallInProgress = true;
    this._ProductApiSubscription = this._productService.getProductList().pipe(first()).subscribe((response:any) => {
      this.products = response;
    }, (error:any) => {
    });
  }

  /**
   * @function productChildrenEvents
   */
  public productChildrenEvents(event: IEventResponse) {
    switch (event.type) {
      case APP_ENUM_TYPE.CHANGE:
        this.changeProductFilter(event.value);
        break;
      case APP_ENUM_TYPE.UI_CHANGE:
        this.changeViewLayoutDesign(event.value);
        break;
      default:
        throw new Error(`Unknown Type of event ${event.type}`);
    }
  }

  /**
   * @function changeProductFilter
   * @param value {Active Value}
   * @summary Base on user selection(type) sorting data
   */
  private changeProductFilter(value: string) {
    switch (value) {
      case APP_ENUM_TYPE.RELEVANCE:
        this.products.sort((firstItem: any, nextItem: any) => {
          return firstItem.id - nextItem.id;
        });
        break;
      case APP_ENUM_TYPE.LOW_TO_HIGH:
        this.products.sort((firstItem: any, nextItem: any) => {
          return firstItem.price - nextItem.price;
        });
        break;
      case APP_ENUM_TYPE.HIGH_TO_LOW:
        this.products.sort((firstItem: any, nextItem: any) => {
          return nextItem.price - firstItem.price;
        });
        break;
      default:
        throw new Error(`Unknown Type of filter options ${value}`);
    }
  }

  /**Change Layout Design event*/
  private changeViewLayoutDesign(type: string) {
    this.uiLayout = type;
  }

  /** Call this function to clean up the established subscriptions */
  private deConstructor() {
    if (this._ProductApiSubscription) {
      this._ProductApiSubscription.unsubscribe();
    }
  }

  ngOnDestroy() {
    this.deConstructor();
  }
}
