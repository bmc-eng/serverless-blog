import React from 'react'
import Amplify, {API} from 'aws-amplify';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

function Posts(){

    const getAllPosts = async () =>{
        await API.get("getPostsApi","/posts",{"header":"getAllPosts"});
    }

    console.log(getAllPosts());
    return(
        <div className='post-body'>
            <h1>List of posts</h1>
        </div>
    );
}

export default Posts;