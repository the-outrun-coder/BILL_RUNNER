import { Component } from '@angular/core';
import { CalendarGridComponent } from '../../../feature/calendar/calendar-grid/calendar-grid.component';

@Component({
  selector: 'brun-monthly-planner',
  standalone: true,
	imports: [
		CalendarGridComponent
	],
  templateUrl: './monthly-planner.component.html',
  styleUrl: './monthly-planner.component.scss'
})
export class MonthlyPlannerComponent {

}
