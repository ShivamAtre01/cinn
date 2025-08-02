import React, { useEffect, useState } from 'react';
import axiosInstance from '../axiosConfig'; // adjust path as needed

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
  axiosInstance.get('/api/posts/')
    .then(res => setPosts(res.data))
    .catch(err => console.error(err));
}, []);


  return (
    <div>
      <h2>Home Feed</h2>
      {posts.map(post => (
        <div key={post.id}>
          <h4>{post.user}</h4>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
