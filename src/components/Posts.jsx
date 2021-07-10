import React from 'react'
import Amplify, {API} from 'aws-amplify';

// Import the config file to connect into your API endpoint
import awsconfig from './aws-exports';

function Posts(){

    const posts = await API.get('api430b7ed9','/posts');
    console.log(posts);
    return(
        <div className='post-body'>
            <h1>List of posts</h1>
        </div>
    );
}

export default Posts;