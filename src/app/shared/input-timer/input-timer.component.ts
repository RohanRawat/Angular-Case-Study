import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CountdownTimerService } from 'src/app/countdown-timer/countdown-timer.service';

interface Logs{
    status:string,
    newDate:Date
}

@Component({
  selector: 'app-input-timer',
  templateUrl: './input-timer.component.html',
  styleUrls: ['./input-timer.component.scss']
})
export class InputTimerComponent implements OnInit {
  
  setLogs:Logs[]= [];
  inputField = new FormControl(1000)

  interval:number|undefined;
  setTime:number|undefined;
  pausingArray:Array<string> = [];
  toggle :boolean = true;
  startCount:number = 0;
  pauseCount:number = 0
  constructor(private _countdownTimerService : CountdownTimerService) { }

  ngOnInit(): void {

  }

  startTimer(timer:string){
    let date = new Date();
    let timerLeft = Number(timer);
    let obj:Logs={
      status :'start',
      newDate:date
    }

    if(this.inputField.value){
    this.startCount++;
    this.setLogs.push(obj);
    this._countdownTimerService.displayLogs.next(this.setLogs);
    this._countdownTimerService.displayStartCount.next(this.startCount);
    this.toggle = false
    this.interval = setInterval(() => {
      if(Number(timerLeft) > 0) {
        Number(timerLeft--);
        this.setTime = Number(timerLeft);
        this.inputField.setValue(this.setTime)
         this._countdownTimerService.displayTimer.next(this.setTime);
      } else {
        timerLeft = 0;
      }
    },1000)
  }
  }

  pauseTimer() {
    let date = new Date()
    let obj:Logs={
      status :'pause',
      newDate:date
    }

    if(this.inputField.value){
     this.pauseCount++;
     this.setLogs.push(obj);
     this._countdownTimerService.displayLogs.next(this.setLogs);
     this._countdownTimerService.displayPauseCount.next(this.pauseCount);
    
     this.toggle=true;
    if(this.setTime){
      let pauseTiming  = String(this.setTime);
      this.pausingArray.push(pauseTiming);
    }
  }
   
    clearInterval(this.interval);
  }

  resetTimer(){
    this.inputField.setValue('');
    this._countdownTimerService.displayTimer.next(0);
    this.setTime = 0;
    this.toggle=true;
    clearInterval(this.interval);
  }

}
