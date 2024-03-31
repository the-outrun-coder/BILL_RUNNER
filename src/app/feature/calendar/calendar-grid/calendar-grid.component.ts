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

	constructor(private CalManager: CalendarManagerService) { }

	ngOnInit(): void {
		console.log(`>> TODAY IS: ${this.CalManager.getToday()}`);
	}
}
