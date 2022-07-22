import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import CreatePost from './Components/CreatePost/CreatePost';



function App() {

  const [posts, setPosts] = useState([{name: "Sydney", userPost: "Of course you should like this post!"}, {name: "Riley", userPost: "You my bestfriend? Ok."}])

  function addNewPost(post){
    let tempEntries = [post, ...posts];
    setPosts(tempEntries);


  }
  return (
    <div>
      <CreatePost AddNewPostProperty={addNewPost}/>
      <DisplayPosts parentEntries={posts}/>
      

    </div>
  );
}

export default App;
