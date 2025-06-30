import React, { useState } from 'react';
import axios from 'axios';
const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { username, password });
    axios.post('http://localhost:3000/signup', { username, password })
  .then((result) => {
    console.log(result.data.message); // ✅ Correct path
  })
  .catch((error) => {
    console.error('Signup error:', error.response?.data?.message || error.message);
  });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className=" bg-opacity-10 backdrop-blur-md rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Register</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-white font-semibold mb-1">Username</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-black/80 focus:outline-none focus:ring-2 focus:ring-white"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-white font-semibold mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-lg bg-black/80 focus:outline-none focus:ring-2 focus:ring-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-indigo-100 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
