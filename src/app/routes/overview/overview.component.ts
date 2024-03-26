import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventsComponent } from '../../feature/calendar/events/events.component';

@Component({
  selector: 'app-overview',
  standalone: true,
	imports: [
		EventsComponent,
		RouterOutlet
	],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
