import React from 'react';
import PostForm from '../components/PostForm';
import MenuBar from '../components/MenuBar.jsx';

function NewPost(){
    return(
        <div>
            <MenuBar/>
            <PostForm/>
        </div>
    )
}

export default NewPost;
