'use client';

import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
let socket;
export default function Home() {
  const [username, setusername] = useState()
  const [message, setmessage] = useState()
  useEffect(() => {
    socketinisalizer()
  }, [])


  async function socketinisalizer() {
    await fetch("/api/socket")

    socket = io()
    socket.emit('receiver', (data) => {
      console.log(data);

    })
  }

  function handelsubmit(e) {
    e.preventDefault()
    if (username && message) {
      socket.emit("send-message", {
        username,
        message
      }) // Clear the input field after sending
    }
    alert('sd')
   
  }
  return (
    <div style={{ padding: '20px' }} className="w-full item-center flex flex-col gap-1 h-fit  ">
      <h1>Real-Time Posts {username +''+message}</h1>
      <label htmlFor="" className='w-full bg-slate-300 p-2'>
        <h1>Enter Username</h1>
        <input type="text" value={username} className='p-3 w-full' onChange={(e) => setusername(e.target.value)} />
      </label>

      {!!username && <span className='w-full h-fit '>
        <div className='w-full min-h-[300px] bg-red-200 rounded-lg'>

        </div>
        <form onSubmit={handelsubmit} className='flex w-full bg-black'>
          <input type="text" value={message} className='p-3 w-full' onChange={(e) => setmessage(e.target.value)} />
          <button type="submit" onSubmit={handelsubmit} className='w-[200px] text-white'>Send re</button>
        </form>

      </span>}
    </div>
  );
}
