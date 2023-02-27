import React, { useEffect, useState } from "react";

export default function UsingUseEffect() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => setPosts(data));
  }, []); // useEffect prevent infinite loop using empty dependence
  console.log("from UsingUseEffect component");

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}
