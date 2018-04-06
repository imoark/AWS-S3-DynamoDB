'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

module.exports.createplaylist = (event, context, callback) => {
  const data = JSON.parse(event.body);

  const params = {
    TableName: 'musicplaylist',
    Item: {
      id: uuid.v1(),
      playlist: data,
    }
  };

  dynamoDB.put(params, (error, result) =>{
    if (error) {
      console.error(error);
      callback(new Error('Unable to create playlist.'));
      return;
    }

    const response = {
      statusCode: 200,
      body: JSON.stringify(result.Items)
    }

    callback(null, response);
  });
};