import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherDataService } from '../../services/weather-data/weather-data.service';

@Component({
	selector: 'app-dashboard-index-page',
	templateUrl: './dashboard-index-page.component.html',
	styleUrls: ['./dashboard-index-page.component.scss']
})
export class DashboardIndexPageComponent implements OnInit {

	constructor(private route: ActivatedRoute, public data: WeatherDataService) { }

	ngOnInit(): void {
		this.route.paramMap.subscribe( async (routeParams) => {
			console.log("WD:", await this.data.select(routeParams.get("city")));
		})
	}
}
