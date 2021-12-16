import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CountdownTimerService {

  displayTimer = new BehaviorSubject<number>(0);
  displayLogs = new BehaviorSubject<{}>([]);
  displayStartCount = new BehaviorSubject<number>(0);
  displayPauseCount = new BehaviorSubject<number>(0);
  constructor() { }
}
