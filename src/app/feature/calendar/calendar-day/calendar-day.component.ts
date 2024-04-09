import { Component, Input } from '@angular/core';
import { getDate } from 'date-fns';

@Component({
  selector: 'brun-calendar-day',
  standalone: true,
  imports: [],
  templateUrl: './calendar-day.component.html',
  styleUrl: './calendar-day.component.scss'
})
export class CalendarDayComponent {
  @Input() day = {};

  dayNumber!: number;

  ngOnInit(): void {
    //@ts-ignore
    this.dayNumber = getDate(this.day);
  }
}
