import React from 'react';
import MenuBar from '../components/MenuBar';
import Posts from '../components/Posts';
import NewPost from '../pages/NewPost';

const Home = ()=>{
    return (
        <div>
            <MenuBar />
            <NewPost />
        </div>
        
    )
}

export default Home;