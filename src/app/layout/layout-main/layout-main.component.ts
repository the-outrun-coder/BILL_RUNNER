import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'brun-layout-main',
  standalone: true,
	imports: [
		HeaderComponent,
		RouterOutlet,
		FooterComponent
	],
  templateUrl: './layout-main.component.html',
  styleUrl: './layout-main.component.scss'
})
export class LayoutMainComponent {

}
