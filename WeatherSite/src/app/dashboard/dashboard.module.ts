import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http"

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardIndexPageComponent } from './pages/dashboard-index-page/dashboard-index-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
	declarations: [DashboardIndexPageComponent],
	imports: [
		CommonModule,
		SharedModule,
		DashboardRoutingModule,
		HttpClientModule
	]
})
export class DashboardModule {

}
