import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit, OnDestroy {

  private subscription!: Subscription;
  
  public secondsToDday: number = 0;
  public minutesToDday: number = 0;
  public hoursToDday: number = 0;

  constructor() { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private getTimeDifference() {
    if (this.secondsToDday < 59)
      this.secondsToDday += 1;
    else {
      this.secondsToDday = 0;

      if (this.minutesToDday < 59)
        this.minutesToDday += 1;
      else {
        this.minutesToDday = 0;
        this.hoursToDday += 1;
      }
    }
  }

  ngOnInit(): void {
    this.subscription = interval(1000)
      .subscribe(x => {
        this.getTimeDifference();
      });
  }

  formatTimer(time: number): string {
    return time <= 9 ? "0" : "";
  }
}
