import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { getDate, isToday } from 'date-fns';

@Component({
  selector: 'button[brun-calendar-day]',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './calendar-day.component.html',
  styleUrl: './calendar-day.component.scss'
})
export class CalendarDayComponent {
  @Input() day: any;

  dayNumber!: number;
  isToday!: boolean;

  ngOnInit(): void {
    //@ts-ignore
    this.dayNumber = getDate(this.day);
    this.isToday = isToday(this.day);
  }
}
