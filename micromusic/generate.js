'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const s3 = new AWS.S3();

module.exports.generate = (event, context, callback) => {
  // const response = {
  //   statusCode: 200,
  //   body: JSON.stringify({
  //     message: 'Go Serverless v1.0! Your function executed successfully!',
  //     input: event,
  //   }),
  // };

  // callback(null, response);

  var s3params = {
  	Bucket: "music-bucket-serverless",
    MaxKeys: 100
  };

  s3.listObjects(s3params, function(err, data) {
     if (err) console.log(err, err.stack); // an error occurred
     else console.log(data); // successful response

     for (var i = 0; i < data.Contents.length; i++) { 

     		let musicname = data.Contents[i].Key;

     		const dynamoparams = {
				TableName: 'musiclist',
				Item: {
					id: i + 1,
					filename: musicname,
				}
			}

			dynamoDB.put(dynamoparams, (error, result) =>{
	            if (error) {
	              console.error(error);
	              callback(new Error('Unable to add Music List to DynamoDB.'));
	              return;
	            }

	            const response = {
	              statusCode: 200,
	              body: JSON.stringify(result.Item)
	            }

	            callback(null, response);
	          })

		}

     const response = {
	    statusCode: 200,
	    body: JSON.stringify(data),
	  };
     
     callback(null, response);


 	});



  // dynamoDB.scan(params, (error, result) => {
  // 	if (error){
  // 		console.error(error);
  // 		callback(new Error('Couldn\'t fetch the micro-music-list list.'));
  // 		return;
  // 	}

  // 	const response = {
  // 		statusCode: 200,
  // 		body: JSON.stringify(result.Items)
  // 	}
  // 	callback(null, response);
  // })

};