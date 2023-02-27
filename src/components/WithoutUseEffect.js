import React, { useState } from "react";

const WithoutUseEffect = () => {
  const [posts, setPosts] = useState([]);
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      setPosts(data);
    });
  console.log("from WithoutUseEffect Component"); // এখানে রি-রেন্ডারের কারণে ইনফিনিট লুপের সৃষ্টি হবে। fetch() asynchronous বলে ৮নং লাইনের কনসোলটা প্রিন্ট হবে তারপর ৭নং লাইনে পোস্ট আপডেট হবে ফলে ‍রি-রেন্ডার হয়ে আবার ৮নং লাইনের কনসোলটা প্রিন্ট হবে এবং বারবার প্রিন্ট হতে থাকবে।

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
};

export default WithoutUseEffect;
