import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutMainComponent } from './layout/layout-main/layout-main.component';

@Component({
  selector: 'app-root',
  standalone: true,
	imports: [
		LayoutMainComponent,
		RouterOutlet,
		MatIconModule,
		MatMenuModule,
		MatButtonModule,
		MatToolbarModule
	],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'BILL_RUNNER';
}
