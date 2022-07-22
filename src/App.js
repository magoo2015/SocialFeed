import React, { useState } from 'react';




function App() {

  const [posts, setPosts] = useState([{name: "Sydney McGee", post: "Testing"}])
  return (
    <div>
      <h3>SocialFeed</h3>
    </div>
  );
}

export default App;
