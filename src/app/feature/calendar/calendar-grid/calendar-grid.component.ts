import { Component } from '@angular/core';
import { CalendarManagerService } from '../../../services/calendar-manager.service';
import { CalendarDayComponent } from '../calendar-day/calendar-day.component';
import {
  MatDialog,
} from '@angular/material/dialog';
import { DayModInterfaceComponent } from '../day-mod-interface/day-mod-interface.component';

const DAYS_PER_WEEK = 7;

@Component({
  selector: 'brun-calendar-grid',
  standalone: true,
  imports: [
    CalendarDayComponent
  ],
  templateUrl: './calendar-grid.component.html',
  styleUrl: './calendar-grid.component.scss'
})
export class CalendarGridComponent {
	private dayList!: Array<any>;
	public weekDayNames!: Array<string>;
	public formatedCalendar!: Array<any>;

	constructor(private CalManager: CalendarManagerService, public dialog: MatDialog) { }

	private splitDaysIntoWeeks() {
		return this.dayList.reduce((intoWeeks, day, index) => {
			if (index % DAYS_PER_WEEK === 0) {
				// Create a new group
				intoWeeks.push([day]);
			} else {
				const lastGroupIndex = intoWeeks.length - 1;
				intoWeeks[lastGroupIndex].push(day);
			}
			return intoWeeks;
		}, []);
	}

	private populateCalendarFrom(targetDay: any): void {
		// Get Calendar days
		this.dayList = this.CalManager.getCalendarViewFor(targetDay);
		// this.dayList = this.CalManager.getCalendarViewForPreviousMonth(targetDay);
		// this.dayList = this.CalManager.getCalendarViewForNextMonth(targetDay);
		// this.dayList = this.CalManager.getCalendarViewForOffsetMonth(targetDay, -10);
		// console.log('>> The list of Days:', this.dayList);
		
		// format into calendar rows
		this.formatedCalendar = this.splitDaysIntoWeeks();
		console.log('>> The list of Formatted Weeks:', this.formatedCalendar);
	}

	ngOnInit(): void {
		const today = this.CalManager.getToday();
		console.log(`>> TODAY IS: ${today}`);

		this.weekDayNames = this.CalManager.WEEKDAYS_NAMES;
		this.populateCalendarFrom(today)
  }
  
  public handleDaySelection(e: any, day: any) {
    console.log('>> DAY WAS SELECTED:');
    // console.log(e);
		console.log(day);
		
		const eventModDialog = this.dialog.open(DayModInterfaceComponent, {
			data: { date: day }
		});
  }
}
