import React from "react";
import './Post.css';

const Post =(props) => {
    return(
        <div>
            <p id='name'>{props.name}</p>
            <p id='message'>{props.name}</p>
            <hr/>
        </div>
    );
}

export default Post;