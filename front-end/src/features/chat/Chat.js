import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

// const socket = io('https://api-v1.carxperto.com/');
const socket = io('https://localhost:5000');

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const currentUser = 'user1'; // Replace with actual user ID

  useEffect(() => {
    // Listen for incoming messages
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Clean up event listener on component unmount
    return () => {
      socket.off('message');
    };
  }, []); // Empty dependency array ensures the effect runs only once

  const sendMessage = (e) => {
    e.preventDefault(); // Prevent form submission

    if (message.trim() !== '') {
      // Emit message to the server
      socket.emit('message', { sender: currentUser, message });
      setMessage(''); // Clear message input
    }
  };

  return (
    <div className='p-4 bg-gray-100'>
      <div className='max-w-md mx-auto bg-white rounded-lg shadow-md'>
        <div className='p-4'>
          <h1 className='text-lg font-semibold mb-2'>Chat</h1>
          <div className='flex flex-col space-y-4'>
            {/* Display chat messages */}
            <div className='flex flex-col space-y-2'>
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-2 rounded-lg ${
                    msg.sender === currentUser ? 'bg-blue-200' : 'bg-gray-200'
                  }`}
                >
                  <p className='text-sm'>
                    {msg.sender}: {msg.message}
                  </p>
                </div>
              ))}
            </div>

            {/* Message input */}
            <form className='flex space-x-2' onSubmit={sendMessage}>
              <input
                type='text'
                value={message}
                name={message}
                onChange={(e) => setMessage(e.target.value)}
                className='flex-1 rounded-lg border-gray-300 px-4 py-2'
                placeholder='Type your message...'
              />
              <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded-lg'>
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
