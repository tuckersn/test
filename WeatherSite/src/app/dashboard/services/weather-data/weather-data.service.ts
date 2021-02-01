import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

/**
 * Service for retrieving weather data from Lambda
 */
@Injectable({
	providedIn: 'root'
})
export class WeatherDataService {

	lat: number;
	lon: number;
	name: string;
	country: string;

	constructor(private http: HttpClient) {
		
	}

	async select(location: string) {
		let res: any = (await this.http.get(environment.apiUrl + "/" + location, {}).toPromise());

		this.lat = res.lat;
		this.lon = res.lon;
		this.name = res.name;
		this.country = res.country;
		
		console.log("RES:", res);

	}
}
