import React from 'react';

function Post({post}) {
    return(
        <div>
            <h3>{post.title.S}</h3>
            <p>{post.bodyTrunk.S}</p>
            <p>{post.blogDate.S}</p>
        </div>
    )
}

export default Post;
