import React from 'react';

function Post({post,key}) {
    return(
        <div key={key}>
            {console.log(post.titleLink.S)}
            <h3>{post.title.S}</h3>
            <p>{post.bodyTrunk.S}</p>
            <p>{post.titleLink.S}</p>
            <p>{post.blogDate.S}</p>
        </div>
    )
}

export default Post;
