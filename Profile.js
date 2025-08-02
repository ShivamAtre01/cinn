import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Profile({ userId }) {
  const [profile, setProfile] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`/api/profile/${userId}/`).then(res => setProfile(res.data));
    axios.get(`/api/user-posts/${userId}/`).then(res => setPosts(res.data));
  }, [userId]);

  return (
    <div>
      <h2>{profile.username}'s Profile</h2>
      <p>Email: {profile.email}</p>
      <h3>Posts</h3>
      {posts.map(post => (
        <div key={post.id}>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
