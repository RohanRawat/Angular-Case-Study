import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Logs{
  status:string,
  newDate:Date
}

@Injectable({
  providedIn: 'root'
})

export class CountdownTimerService {

  displayTimer = new BehaviorSubject<number>(0);
  displayLogs = new BehaviorSubject<Logs[]>([]);
  displayStartCount = new BehaviorSubject<number>(0);
  displayPauseCount = new BehaviorSubject<number>(0);
  constructor() { }
}
