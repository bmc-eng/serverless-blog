/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_SERVERLESSBLOGPOSTS_ARN
	STORAGE_SERVERLESSBLOGPOSTS_NAME
Amplify Params - DO NOT EDIT */

const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB();

const getAllPosts = async () => {
    const params = {
        TableName:"ServerlessBlogPosts-dev",
        ProjectionExpression:"id, bodyTrunk, blogDate, title, titleLink"
    }
    
    return await dynamodb.scan(params).promise();
}

const getSinglePost = async(id, titleLink) => {
    const params = {
        TableName: "ServerlessBlogPosts-dev",
        KeyConditionExpression: "titleLink = :titleLink and id = :id",
        ExpressionAttributeValues:{
            ":id":{"S":id},
            ":titleLink":{"S":titleLink}
        },
        ProjectionExpression:"blogDate,title,para"
    }
    
    return await dynamodb.query(params).promise()
}

exports.handler = async (event) => {
    // filter the event based on all post request or single item
    //const command = JSON.parse(event);
    //console.log(event.queryStringParameters)
    const userData = event.queryStringParameters;
    //console.log(userData);
    var item = null;
    
    switch (userData.header) {
        case "getAllPosts":
            item = await getAllPosts();
            break;
        
        case "getPost":
            item = await getSinglePost(userData.id, userData.link);
            break;

        default:
            item = "No data";
    }
    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin" : "*"
        },

        body: JSON.stringify(item)
    };
    return response;
};