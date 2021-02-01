import { default as axios } from "axios";
import { APIGatewayRequest } from "./aws";
import { LOCATIONS } from "./locations";



export async function retrieveWeatherData(event: APIGatewayRequest) {
	// Get API gateway route param for city, last segment of url
	let cityKey = event.pathParameters!.city as keyof typeof LOCATIONS;
			
	// Verify the city provided is in the dataset
	if(Object.keys(LOCATIONS).includes(cityKey)) {

		let city = LOCATIONS[cityKey];
		let weatherData = (await axios.get("https://api.openweathermap.org/data/2.5/onecall", {
			params: {
				lat: city.lat,
				lon: city.lon,
				appid: process.env.OPEN_WEATHER_APP_ID
			}
		})).data;

		// Combine the predefined data with the API response
		return {
			statusCode: 200,
			headers: {},
			body: JSON.stringify(Object.assign(city, {
				timezone: weatherData.timezone,
				timezone_offset: weatherData.timezone_offset,
				current: weatherData.current,
				hourly: weatherData.hourly,
				daily: weatherData.daily
			}), null, 4)
		}
	} else {
		return {
			statusCode: 404,
			headers: {},
			body: "Cannot find that city."
		}
	}
}

export const handler = async (event: APIGatewayRequest) => {
	try {

		console.log("EVENT:", event);

		if(event.requestContext) {
			if(event.requestContext.http!.method! === "OPTIONS") {
				// All of this is a bad idea in production, wouldn't do this besides demoing purposes.
				return {
					statusCode: 200,
					headers: {
						"Access-Control-Allow-Origin": event.headers.origin,
						"Access-Control-Allow-Headers": "*",
						"Access-Control-Allow-Credentials": true
					},
					body: ""
				}
			}
		}

		let weatherDataRes = await retrieveWeatherData(event);
		weatherDataRes.headers = Object.assign(weatherDataRes.headers, {
			"Access-Control-Allow-Origin": event.headers.origin,
			"Access-Control-Allow-Headers": "*",
			"Access-Control-Allow-Credentials": true
		})
		return weatherDataRes;

	} catch(e) {
		console.error(e);
		return {
			statusCode: 500,
			headers: {},
			body: "Something went wrong."
		}
	}
}