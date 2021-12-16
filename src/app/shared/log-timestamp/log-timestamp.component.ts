import { AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';
import { CountdownTimerService } from 'src/app/countdown-timer/countdown-timer.service';

@Component({
  selector: 'app-log-timestamp',
  templateUrl: './log-timestamp.component.html',
  styleUrls: ['./log-timestamp.component.scss']
})
export class LogTimestampComponent implements OnInit{
 mylogs:any;
  constructor(private _countDownTimer :CountdownTimerService) { }
  ngOnInit(): void {
    this._countDownTimer.displayLogs.subscribe(res=>{
        this.mylogs = res;
      })
  }
}
