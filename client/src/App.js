import React from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

const App = () => {
  return (
    <div className="container">
      <h1>MiniConfessions</h1>
      <hr />
      <h2>Create Post</h2>
      <PostCreate />
      <hr />
      <h1>Posts</h1>
      <PostList />
    </div>
  );
};
export default App;
