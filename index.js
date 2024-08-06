import "dotenv/config";

import { UsersApiService } from 'neurelo-sdk';

async function execute() {
	const response = await UsersApiService.findUsers(		
		{"id":true},
		undefined,
		undefined,
		undefined,
		undefined
	);

	console.log("response: ", response.data?.data);

	return response;
}

execute();