'use strict';

const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();


module.exports.get = (event, context, callback) => {

	const dynamoparams = {
		TableName: 'musiclist',
		FilterExpression: "contains(#filename, :filename)",
	    ExpressionAttributeNames: {
	        "#filename": "filename",
	    },
	    ExpressionAttributeValues: {
	        ":filename": event.pathParameters.filename,
	    } 
		// Key: {
		// 	filename: event.pathParameters.filename
		// }
	};

	dynamoDB.scan(dynamoparams, (error, result) => {
		if (error) {
			console.error(error);
			callback(new Error('Couldn\'t fetch the searched music.'));
			return;
		}

		const response = {
			statusCode: 200,
			// results or result
			body: JSON.stringify(result.Items)
		}
		callback(null, response);
		console.log(response);
	})
}