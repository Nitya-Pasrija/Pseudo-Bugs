import React from 'react'
import Card from '../components/Card'
import {useState} from 'react'
import Bnavbar from '../components/Bnavbar'
const CompanyList = () => {
  return (
    <div className= "bg-gradient-to-r from-green-400 to-blue-500">
        <Bnavbar/>
        <div className='w-screen bg-gradient-to-r from-green-400 to-blue-500 mb-2'>
            <input placeholder="Search Here" className="border-solid border-2  border-black p-2 w-80 mx-10 my-3"></input>
            <button type="submit"><i class="fa fa-search " ></i></button>
        </div>
        <div className="mx-10 flex flex-wrap p-3 bg-gradient-to-r from-green-400 to-blue-500">
            <Card title="Content Writer" cls="INR. 1000" author="Google" img="https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=600"/>
            <Card title="Videography" cls="INR 2000" author="RasberryPi" img="https://images.pexels.com/photos/1181280/pexels-photo-1181280.jpeg?auto=compress&cs=tinysrgb&w=600"/>
            <Card title="Data Analytics" cls="INR 1500" author="Lanna Forever21" img="https://images.pexels.com/photos/1181376/pexels-photo-1181376.jpeg?auto=compress&cs=tinysrgb&w=600"/>
            <Card title="UI Designer" cls="INR 8000" author="Dipti"/>
            <Card title="Script Writer" cls="INR 5200" author="Akanksha"/>
            <Card title="Voice Actor" cls="INR 7000" author="Samiksha"/>
        </div>
        <div className="bg-gray-800 h-8 w-screen">
        </div>
    </div>
  )
}

export default CompanyList