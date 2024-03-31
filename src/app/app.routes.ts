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
import { MonthlyPlannerComponent } from './routes/overview/monthly-planner/monthly-planner.component';
import { YearlyPlannerComponent } from './routes/overview/yearly-planner/yearly-planner.component';
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
			// single account
			{ path: 'manage', component: ManageComponent }
		]
	},
	{
		path: 'overview', component: OverviewComponent, children: [
			{ path: 'month', component: MonthlyPlannerComponent },
			{
				path: 'year', component: YearlyPlannerComponent, children: [
				{ path: 'month', component: MonthlyPlannerComponent },
				]
			},
		]
	},
	{ path: 'transaction', component: TransactionComponent },
	// single trx
];
