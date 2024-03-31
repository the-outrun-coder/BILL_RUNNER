import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventListComponent } from '../../feature/calendar/event-list/event-list.component';


@Component({
  selector: 'app-overview',
  standalone: true,
	imports: [
		EventListComponent,
		RouterOutlet
	],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
