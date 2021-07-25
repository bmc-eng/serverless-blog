import React, {useState, useEffect} from 'react'
import Amplify, {API} from 'aws-amplify';
import awsconfig from '../aws-exports';
import Post from './Post.jsx'

Amplify.configure(awsconfig);


function Posts(){

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getAllPosts();
    },[]);

    function getAllPosts() {
        const myInit = {
            queryStringParameters: {
                "header":"getAllPosts"
            }
        }
        API
            .get("getPostApi","/posts", myInit)
            .then((data) => {
                setPosts(data.Items);
            })
            .catch(error => {
                console.log(error.response);
            })
        }

    return(
        <div className='post-body'>
            <h1>List of posts</h1>
            {posts.map((post, key) => <Post post={post} key={key}/>)}
        </div>
    );
}

export default Posts;