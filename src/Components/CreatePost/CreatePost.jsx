import React, { useState } from 'react';


const CreatePost = (props) => {

    const [name, setName] = useState('');
    const [userPost, setPost] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            name: name,
            userPost: userPost
        };
        console.log(newPost);
        props.AddNewPostProperty(newPost)
    }



    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type='text' value={name} onChange={(event) => setName(event.target.value)}/>
            <label>Post</label>
            <input type='text' value={userPost} onChange={(event) => setPost(event.target.value)}/>
            <button type='submit'>Create</button>
        </form>

    );
}
 
export default CreatePost;