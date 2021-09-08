import React from 'react';
import MenuBar from '../components/MenuBar';
import Posts from '../components/Posts';
//import NewPost from '../pages/NewPost';

const Home = ()=>{
    return (
        <div>
            <MenuBar/>
            <Posts />
        </div>
        
    )
}

export default Home;