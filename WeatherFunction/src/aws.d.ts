/**
 * "aws-sdk" package doesn't reflect actual input
 */
export interface APIGatewayRequest {
	// Gateway route ex: "{method} /{path}/{path}"
	routeKey: string,
	// HTTP Headers
	headers: {
		[key: string]: string
	}
	// Request information
	requestContext: {
		http: {
			method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS'
		}
	}
	// Params of the route, the {id+} parts of a route path
	pathParameters: {
		[key: string]: string
	}
}