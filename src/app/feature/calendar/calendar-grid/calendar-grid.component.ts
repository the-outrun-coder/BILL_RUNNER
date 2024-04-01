import { Component } from '@angular/core';
import { CalendarManagerService } from '../../../services/calendar-manager.service';

@Component({
  selector: 'brun-calendar-grid',
  standalone: true,
  imports: [],
  templateUrl: './calendar-grid.component.html',
  styleUrl: './calendar-grid.component.scss'
})
export class CalendarGridComponent {
	private dayList!: Array<any>;

	constructor(private CalManager: CalendarManagerService) { }

	private populateCalendarFrom(currentDay: any): void {
		this.dayList = this.CalManager.getCalendarViewFor(currentDay);
		// this.dayList = this.CalManager.getCalendarViewForPreviousMonth(currentDay);
		// this.dayList = this.CalManager.getCalendarViewForNextMonth(currentDay);
		// this.dayList = this.CalManager.getCalendarViewForOffsetMonth(currentDay, -10);
		console.log('>> The list of Days:', this.dayList);
	}

	ngOnInit(): void {
		const today = this.CalManager.getToday();
		console.log(`>> TODAY IS: ${today}`);

		this.populateCalendarFrom(today)
	}
}
