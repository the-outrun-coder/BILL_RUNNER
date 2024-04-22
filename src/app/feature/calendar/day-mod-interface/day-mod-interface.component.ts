import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { format } from 'date-fns';

export interface DateModArgs {
	date: any
}

@Component({
  selector: 'brun-day-mod-interface',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent],
  templateUrl: './day-mod-interface.component.html',
  styleUrl: './day-mod-interface.component.scss'
})
export class DayModInterfaceComponent {
	public theDate!: string;

	constructor(@Inject(MAT_DIALOG_DATA) public data: DateModArgs) {
	}
	ngOnInit() {
		const { date } = this.data;
		this.theDate = format(date, 'cccc, MMMM do yyyy');
	}
}
