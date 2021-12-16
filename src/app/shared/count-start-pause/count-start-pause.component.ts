import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountdownTimerService } from 'src/app/countdown-timer/countdown-timer.service';

@Component({
  selector: 'app-count-start-pause',
  templateUrl: './count-start-pause.component.html',
  styleUrls: ['./count-start-pause.component.scss']
})
export class CountStartPauseComponent implements OnInit {
  start=0;
  pause=0;
  constructor(private __countDownTimer : CountdownTimerService) { }

  ngOnInit(): void {

      this.__countDownTimer.displayStartCount.subscribe(res=>{
        this.start = res;
      })

      this.__countDownTimer.displayPauseCount.subscribe(res=>{
        this.pause = res;
      })
    }


}
