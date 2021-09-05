/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_SERVERLESSBLOGPOSTS_ARN
	STORAGE_SERVERLESSBLOGPOSTS_NAME
Amplify Params - DO NOT EDIT */
const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB();

const addPost = async (item) => {
    const params = {
        TableName: "ServerlessBlogPosts-dev",
        Item: item
    }
    
    return await dynamodb.putItem(params).promise();
}

exports.handler = async (event) => {
    const userData = event.multiValueQueryStringParameters.post;
    var dbResponse = await addPost(userData);
    const response = {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  }, 
        body: JSON.stringify(dbResponse),
    };
    return response;
};
