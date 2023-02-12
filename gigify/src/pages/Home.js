import React from 'react'
import Signin from '../components/Signin'

const Home = () => {
  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1461468611824-46457c0e11fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80')] h-screen w-screen py-20 px-20">
        <div className="flex justify-center opacity-0.5 text-center text-white shadow-lg p-10 px-500 rounded-xl object-center bg-white flex-1 w-50 py-20"> 
        <Signin/>
        </div>
        
    </div>
    
  )
}

export default Home