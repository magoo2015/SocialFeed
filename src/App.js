import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';



function App() {

  const [posts, setPosts] = useState([{name: "Sydney McGee", userPost: "Of course you should like this post!"}])
  return (
    <div>
      <DisplayPosts parentEntries={posts}/>

    </div>
  );
}

export default App;
