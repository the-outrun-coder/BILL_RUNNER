import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarManagerService {
	private today: any; // TODO - SOME DATE OBJECT

	constructor() {
		this.initializeState();
	}
	
	private initializeState() {
		this.today = new Date();
	}
	
	public getToday = () => { 
		return this.today;
	}
}
