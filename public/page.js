'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [ssd, submis] = useState();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    // Fetch initial posts
    fetch('/api/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data));

    // Connect to WebSocket
    const ws = new WebSocket('ws://localhost:3000/api/socket');

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.type === 'update') {
        setPosts(message.data);
        
      }
    };
console.log('sjdjd')
    return () => ws.close(); // Clean up WebSocket connection
  }, []);

  const addPost = async () => {
    await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content }),
    });
    setTitle('');
    setContent('');
     
  };

  return (
    <div style={{ padding: '20px' }} className="w-full item-center flex flex-col gap-1 h-fit  ">
      <h1>Real-Time Posts</h1>
      <div className="flex w-full gap-3 *:bg-black *:text-white *:p-2  item-center flex-col ">
        <input
          type="text"
          placeholder="Title" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button onClick={addPost}>Add Post</button>
      </div>
      <ul className="flex w-full flex-col item-center !bg-gray-300 min-h-[300px] !text-red-500">
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}sd</h2>
            <p>{post.content}sdff</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
