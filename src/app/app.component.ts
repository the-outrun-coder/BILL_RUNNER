import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LayoutMainComponent } from './layout/layout-main/layout-main.component';

@Component({
  selector: 'app-root',
  standalone: true,
	imports: [
		RouterOutlet,
		LayoutMainComponent,
	],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'BILL_RUNNER';
}
