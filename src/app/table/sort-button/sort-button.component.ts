import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { APP_ENUM_TYPE, SORT_ORDER_TYPE } from '../../constants/product.constant';
import { IEventResponse } from 'src/app/interfaces/emitterCallback';

@Component({
  selector: 'app-sort-btn',
  templateUrl: './sort-button.component.html',
  styleUrls: ['./sort-button.component.scss'],
})
export class SortButtonComponent implements OnInit {
  @Output() sortCallback = new EventEmitter<IEventResponse>();
  public sortOrder = SORT_ORDER_TYPE;
  public orderType: string = SORT_ORDER_TYPE.DEF;

  constructor() { }

  ngOnInit(): void { }

  /**Sorting value change base on our previous value */
  public changeSortType() {
    switch (this.orderType) {
      case SORT_ORDER_TYPE.ASC:
        this.orderType = SORT_ORDER_TYPE.DES;
        break;
      case SORT_ORDER_TYPE.DES:
        this.orderType = SORT_ORDER_TYPE.DEF;
        break;
      default:
        this.orderType = SORT_ORDER_TYPE.ASC;
        break;
    }
    //Emit Event
    this.sortCallback.emit({ type: APP_ENUM_TYPE.CHANGE, value: this.orderType });
  }
}
