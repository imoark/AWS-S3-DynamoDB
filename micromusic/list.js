'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

const dynamoparams = {
    TableName: 'musiclist',
}

module.exports.list = (event, context, callback) => {
  // const response = {
  //   statusCode: 200,
  //   body: JSON.stringify({
  //     message: 'Go Serverless v1.0! Your function executed successfully!',
  //     input: event,
  //   }),
  // };

  // callback(null, response);

  dynamoDB.scan(dynamoparams, (error, result) => {
    if (error) {
      console.error(error);
      callback(new Error('Couldn\'t fetch the music list.'));
      return;
    }

    const response = {
      statusCode: 200,
      // results or result
      body: JSON.stringify(result.Items)
    }
    callback(null, response);
    console.log(response)
  })

  


};