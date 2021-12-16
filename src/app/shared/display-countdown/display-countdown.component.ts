import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { CountdownTimerService } from 'src/app/countdown-timer/countdown-timer.service';

@Component({
  selector: 'app-display-countdown',
  templateUrl: './display-countdown.component.html',
  styleUrls: ['./display-countdown.component.scss']
})
export class DisplayCountdownComponent implements OnInit {
  timing=0;
  constructor(private __countDownTimer : CountdownTimerService) { }
  ngOnInit(): void {
      this.__countDownTimer.displayTimer.subscribe(res=>{
            this.timing = res;
      })
    }
}
