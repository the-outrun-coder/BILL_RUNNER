import { Routes } from '@angular/router';

import { LoginComponent } from './routes/login/login.component';
//
import { SessionComponent } from './routes/session/session.component';
import { BillPayComponent } from './routes/session/bill-pay/bill-pay.component';
import { ReviewComponent } from './routes/session/review/review.component';
//
import { AccountComponent } from './routes/account/account.component';
import { ManageComponent } from './routes/account/manage/manage.component';
//
import { OverviewComponent } from './routes/overview/overview.component';
import { YearTableComponent } from './routes/overview/year-table/year-table.component';
import { MonthTableComponent } from './routes/overview/month-table/month-table.component';
//
import { TransactionComponent } from './routes/transaction/transaction.component';

export const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{
		path: 'session', component: SessionComponent, children: [
			{ path: 'bill-pay', component: BillPayComponent },
			{ path: 'review', component: ReviewComponent },
		]
	},
	{
		path: 'account', component: AccountComponent, children: [
			{ path: 'manage', component: ManageComponent }
		]
	},
	{
		path: 'overview', component: OverviewComponent, children: [
			{ path: 'month', component: MonthTableComponent },
			{
				path: 'year', component: YearTableComponent, children: [
				{ path: 'month', component: MonthTableComponent },
				]
			},
		]
	},
	{ path: 'transaction', component: TransactionComponent },
];
