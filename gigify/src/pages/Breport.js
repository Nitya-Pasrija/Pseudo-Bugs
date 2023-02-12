import React from 'react'
import Bnavbar from '../components/Bnavbar'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Formwarn from '../components/Formwarn';

const Breport = () => {
  return (
    <>
        <Bnavbar/>
        <div class='bg-gradient-to-r from-pink-500 hover:to-yellow-500'>
            <div class="bg-orange-100 border-t border-b border-orange text-red px-4 py-3 justify-text-center" role="alert">
                <p class="font-bold">Caution. Please note!</p>
                <p class="text-sm">We will send your message across to admins. Removal of a post can take upto a week.</p>
            </div>
        </div>
        <div className="w-90 m-5 p-12 border-solid border-2 border-black ">
            <Formwarn/>
        </div>
    </>
  )
}

export default Breport