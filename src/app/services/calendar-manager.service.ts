import { Injectable } from '@angular/core';
import { addMonths, eachDayOfInterval, endOfMonth, getDay, startOfMonth, subMonths } from 'date-fns';

@Injectable({
  providedIn: 'root'
})
export class CalendarManagerService {
	public WEEKDAYS_NAMES: Array<string> = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	private today: any; // TODO - SOME DATE OBJECT

	constructor() {
		this.initializeState();
	}
	
	private initializeState() {
		this.today = new Date();
	}
	
	public getToday = ():string => { 
		return this.today;
	}

	public getWeekDayIndexFrom(targetInstance: any): number {
		return getDay(targetInstance);
	}

	private getFirstDayOfLastMonth(targetDay: any) {
		return subMonths(startOfMonth(targetDay), 1);
	}
	private getFirstDayOfNextMonth(targetDay: any) {
		return addMonths(startOfMonth(targetDay), 1);
	}

	private getMonthDayListFor(targetDay: any) {
		const firstDay = startOfMonth(targetDay);
		const lastDay = endOfMonth(targetDay);
		return eachDayOfInterval({
			start: firstDay,
			end: lastDay
		});
	}

	public getDaysOfLastMonthFrom(targetDay: any) {
		const firstOfLast = this.getFirstDayOfLastMonth(targetDay);
		return this.getMonthDayListFor(firstOfLast);
	}
	public getDaysOfNextMonthFrom(targetDay: any) {
		const firstOfNext = this.getFirstDayOfNextMonth(targetDay);
		return this.getMonthDayListFor(firstOfNext);
	}

	private getOtherMonthOverflowDaysFrom(targetDay: any, direction: string): Array<any> {
		// RETURN overflow days for start and end of calendar view
		
		if (direction === 'PREV') {
			const firstDayOfThisMonth = startOfMonth(targetDay);
			const startOfMonthWeekdayIndex = this.getWeekDayIndexFrom(firstDayOfThisMonth);
			// console.log('>> STARTING THE MONTH ON WEEKDAY INDEX:', startOfMonthWeekdayIndex);
			return (startOfMonthWeekdayIndex === 0)
				? []
				: this.getDaysOfLastMonthFrom(targetDay).slice(-startOfMonthWeekdayIndex);
			
		} else if (direction === 'NEXT') {
			const lastWeekdayIndex = 6;
			const lastDayOfThisMonth = endOfMonth(targetDay);
			const endOfMonthWeekdayIndex = this.getWeekDayIndexFrom(lastDayOfThisMonth);
			const remainingDaysOffset = lastWeekdayIndex - endOfMonthWeekdayIndex;
			// console.log('>> ENDING THE MONTH ON WEEKDAY INDEX:', endOfMonthWeekdayIndex);
			return this.getDaysOfNextMonthFrom(targetDay).slice(0, remainingDaysOffset);

		} else {
			// TODO - ERROR FOR missing 'direction' argument
			return []
		}
	}

	public getCalendarViewFor(targetDay: any) {
		const lastMonthOverflowDays = this.getOtherMonthOverflowDaysFrom(targetDay, 'PREV');
		const CurrentMonthDays = this.getMonthDayListFor(targetDay);
		const NextMonthLeadDays = this.getOtherMonthOverflowDaysFrom(targetDay, 'NEXT');

		return [
			...lastMonthOverflowDays,
			...CurrentMonthDays,
			...NextMonthLeadDays
		];
	}

	public getCalendarViewForPreviousMonth(currentDay: any) {
		const firstOfLastMonth = this.getFirstDayOfLastMonth(currentDay);
		return this.getCalendarViewFor(firstOfLastMonth);
	};

	public getCalendarViewForNextMonth(currentDay: any) {
		const firstOfNextMonth = this.getFirstDayOfNextMonth(currentDay);
		return this.getCalendarViewFor(firstOfNextMonth);
	};

	public getCalendarViewForOffsetMonth(currentDay: any, offset: number) {
		let firstOfOffset;

		// console.log('>> WHAT IS OFFSET:', offset);

		switch (Math.sign(offset)) {
			case 1:
				firstOfOffset = addMonths(startOfMonth(currentDay), offset);
				break;
			case -1:
				firstOfOffset = subMonths(startOfMonth(currentDay), Math.abs(offset));
				break;
			default:
				firstOfOffset = startOfMonth(currentDay);
		}

		// console.log('>> What is first of offset:', firstOfOffset);

		return this.getCalendarViewFor(firstOfOffset);
	};
}
