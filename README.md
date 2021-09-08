# Serverless Blog

This project is a simple serverless blog post site using AWS where you can enter blog posts and have them display on a site without needing to set up a server to host the posts. Its intended as a single user site. It uses API Gateway, Lambda and Dynamo DB as the backend and React as front end. I have used Amplify to build and using react bootstrap for the styling. The app has two pages, one that displays all of the posts pulled down from DynamoDB and then a new post page which allows you to enter a new post into the platform. There is no authentication of users yet and the DB does not have functionality yet to show which user has entered which post and display only these to the client.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation

In the project directory, you can run:

npm i


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


