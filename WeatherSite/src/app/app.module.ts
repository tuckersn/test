import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
	{
		path: '',
		redirectTo: 'dashboard/tulsa',
		pathMatch: 'full'
	},
	{
		path: 'dashboard',
		loadChildren: () => import("./dashboard/dashboard.module").then(m => m.DashboardModule)
	},
	{
		path: 'dashboard/:city',
		loadChildren: () => import("./dashboard/dashboard.module").then(m => m.DashboardModule)
	},
	{
		path: '**',
		loadChildren: () => import("./error/error.module").then(m => m.ErrorModule)
	}
];


@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		CoreModule,
		BrowserModule,
		RouterModule.forRoot(routes),
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
