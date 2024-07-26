import "dotenv/config";

// TODO: Add your code here

import { CustomApiService } from 'neurelo-sdk';

async function execute() {
	const response = await CustomApiService.averagePrice(		
		"Treatment"
	);

	console.log("response: ", response.data?.data);

	return response;
}

execute();