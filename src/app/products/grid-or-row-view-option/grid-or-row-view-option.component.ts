import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { APP_ENUM_TYPE } from 'src/app/constants/product.constant';
import { IEventResponse } from 'src/app/interfaces/emitterCallback';

@Component({
  selector: 'app-grid-and-row-view-option',
  templateUrl: './grid-or-row-view-option.component.html',
  styleUrls: ['./grid-or-row-view-option.component.scss'],
})
export class GridOrRowViewOptionComponent implements OnInit {
  @Output() viewCallback = new EventEmitter<IEventResponse>();
  @Input() default: string = APP_ENUM_TYPE.GRID_VIEW;
  public appEnum = APP_ENUM_TYPE; //using that property in template

  constructor() {}

  ngOnInit(): void {}

  public changeGridAndListViewEvent(type: string) {
    this.default = type;
    //Emit
    this.viewCallback.emit({ type: APP_ENUM_TYPE.UI_CHANGE, value: type });
  }
}

