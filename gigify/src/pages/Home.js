import React from 'react'
import Signin from '../components/Signin'

const Home = () => {
  return (
    <div className="bg-[url('https://www.chaffe.com/wp-content/uploads/2016/10/award28129.jpg.pagespeed.ce_.Kt4hcF2Qzf.jpg')] h-screen w-screen py-20 px-20">
        <div className="flex justify-center opacity-0.5 text-center text-white shadow-lg p-10 rounded-xl object-center dark:bg-blue-900 flex-1 w-50 py-20"> 
        <Signin/>
        </div>
        
    </div>
    
  )
}

export default Home