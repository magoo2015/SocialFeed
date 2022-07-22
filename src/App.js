import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import CreatePost from './Components/CreatePost/CreatePost';



function App() {

  const [posts, setPosts] = useState([{name: "Sydney McGee", userPost: "Of course you should like this post!"}])
  return (
    <div>
      <DisplayPosts parentEntries={posts}/>
      <CreatePost />

    </div>
  );
}

export default App;
