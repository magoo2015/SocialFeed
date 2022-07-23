import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import CreatePost from './Components/CreatePost/CreatePost';
import './App.css';



function App() {

  const [posts, setPosts] = useState([{name: "Sydney", userPost: "Of course you should like this post!"}, {name: "Riley", userPost: "You my bestfriend? Ok."}])

  function addNewPost(post){
    let tempEntries = [post, ...posts];
    setPosts(tempEntries);


  }
  return (
    <div className='container-fluid'>
      <h3 style={{margin: '1em'}}>Social
      <small className='text-muted'>Feed</small></h3>
        <div className='border-box'>
          <CreatePost AddNewPostProperty={addNewPost}/>
        </div>
        <div className='border-box'>
          <DisplayPosts parentEntries={posts}/>
        </div>
    </div>
  );
}

export default App;
