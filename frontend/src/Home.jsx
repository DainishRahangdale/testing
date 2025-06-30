import React from 'react'
import {useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  const handleLogin=()=>{
       navigate('/login')
  }
  const handleSignUp= ()=>{
    navigate('/signup');
  }
  return (
    <div className="max-h-screen max-w-screen bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 flex items-center justify-center px-2">
      <div className="bg-white/10 backdrop-blur-md p-2 rounded-3xl shadow-2xl w-full text-center border border-white/30">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-6">
          Welcome to Authentication ✨
        </h1>
        <p className="text-white/90 text-lg mb-8">
          Your journey into the beautiful world of React starts here. Fast. Elegant. Magical.
        </p>
        <button onClick={handleLogin} className="bg-white text-purple-600 font-semibold px-6 mx-1.5 py-3 rounded-full hover:bg-purple-100 transition-all duration-300 shadow-md">
          Login
        </button>
        <button onClick={handleSignUp} className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-full hover:bg-purple-100 transition-all duration-300 shadow-md">
          Sign Up
        </button>
      </div>
    </div>
  )
}

export default Home
