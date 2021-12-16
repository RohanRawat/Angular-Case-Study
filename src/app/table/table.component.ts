import { Component, OnDestroy, OnInit } from '@angular/core';
import { first, Subscription } from 'rxjs';
import { SORT_ORDER_TYPE } from 'src/app/constants/product.constant';
import { IEventResponse } from 'src/app/interfaces/emitterCallback';
import { TableService } from './services/table.service';


enum SORT_NAME {
  USERNAME = 'USERNAME',
  EMAIL = 'EMAIL',
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, OnDestroy {
  private _ApiSubscription!: Subscription;
  public users: any;
  public isApiCallInProgress: boolean = false;
  public sortingName = SORT_NAME;

  constructor(
    private _tableService: TableService,
    
  ) { }

  ngOnInit(): void {
    this.getUserListing();

  }

  /**
     Get User List
   */
  private getUserListing() {
    this.isApiCallInProgress = true;
    this._ApiSubscription = this._tableService.getUserListing().pipe(first()).subscribe((response) => {
      this.users = response;
      this.isApiCallInProgress = false;
    }, (error) => {
      this.isApiCallInProgress = false;
      //Error
    });
  }

  /**
     Sorting function
   */
  public sorting(event: IEventResponse, type: string) {
    let key = '';
    let order: number = event.value == SORT_ORDER_TYPE.DES ? -1 : 1;
    switch (type) {
      case SORT_NAME.USERNAME:
        key = 'username';
        break;
      //Sort By email
      case SORT_NAME.EMAIL:
        key = 'email';
        break;
      default:
        throw new Error(`Unknown Type of sorting name ${type}`);
    }
    //For Reset Sorting
    if (event.value === SORT_ORDER_TYPE.DEF) {
      key = 'id';
    }
    //User Sorting
    this.users = this.users.sort((value: any, nextvalue: any) => {
      if (order == -1) {
        return value[key] < nextvalue[key] ? 1 : -1;
      } else {
        return value[key] > nextvalue[key] ? 1 : -1;
      }
    });
    
  }

  /** function to unsubscribe the established subscriptions */
  private deConstructor() {
    if (this._ApiSubscription) {
      this._ApiSubscription.unsubscribe();
    }
  }

  ngOnDestroy() {
    this.deConstructor();
  }
}

