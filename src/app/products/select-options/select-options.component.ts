import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { APP_ENUM_TYPE } from 'src/app/constants/product.constant';
import { IEventResponse } from 'src/app/interfaces/emitterCallback';

@Component({
  selector: 'app-select-options',
  templateUrl: './select-options.component.html',
  styleUrls: ['./select-options.component.scss'],
})
export class SelectOptionsComponent implements OnInit {
  @Input() options!: Array<any>;
  @Output() selectCallback = new EventEmitter<IEventResponse>();

  constructor() { }

  ngOnInit(): void { }

  public selectChangeEvent(event: any) {
    //Emit Event
    this.selectCallback.next({ type: APP_ENUM_TYPE.CHANGE, value: event.target.value });
  }
}
