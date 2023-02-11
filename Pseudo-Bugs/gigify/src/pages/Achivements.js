import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import {useState} from 'react'
const Achivements = () => {
  return (
    <div className= "bg-[#C6D3C2]">
        <Navbar/>
        <div className='w-screen bg-[#C6D3C2] mb-2'>
            <input placeholder="Search Here" className="border-solid border-2  border-black p-2 w-80 mx-10 my-3"></input>
            <button type="submit"><i class="fa fa-search " ></i></button>
        </div>
        <div className="mx-10 flex flex-wrap p-3 bg-[#C6D3C2]">
            <Card title="1. Hackathon" cls="IT, 2025" author="Andrea" img="https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=600"/>
            <Card title="2. Ideathon" cls="ECE, 2024" author="Abigail" img="https://images.pexels.com/photos/1181280/pexels-photo-1181280.jpeg?auto=compress&cs=tinysrgb&w=600"/>
            <Card title="3. Research-Paper" cls="IT, 2021" author="Lanna" img="https://images.pexels.com/photos/1181376/pexels-photo-1181376.jpeg?auto=compress&cs=tinysrgb&w=600"/>
            <Card title="4. Scholarship" cls="IT, 2025" author="Dipti"/>
            <Card title="5. Ideathon" cls="CSE-AI, 2026" author="Akanksha"/>
            <Card title="6. Hackathon" cls="CSE, 2023" author="Samiksha"/>
        </div>
        <div className="bg-gray-800 h-8 w-screen">

        </div>
    </div>
  )
}

export default Achivements