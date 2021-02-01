import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardIndexPageComponent } from './pages/dashboard-index-page/dashboard-index-page.component';

const routes: Routes = [
	{
		path: ":city",
		component: DashboardIndexPageComponent
	},
	{
		path: "**",
		redirectTo: "/error"
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DashboardRoutingModule { }
