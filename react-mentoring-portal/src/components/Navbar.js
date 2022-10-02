import React from 'react';
import '../index.css';
import logo from '../images/mrlogo.png'

export default function Navbar() {
    return(

        <nav className='main-nav flex bg-white shadow-md h-24 items-center py-4 px-8 '  >
            
                <div className='px-6 py-3'> 
                <a href='../index.js'>
                <img className='h-12 w-50' src={logo} alt="MRlogo"/>
                </a>
                </div>
                <div className='ml-auto      '>
                    <button
                    className='  bg-white rounded-md font-bold uppercase text-sm px-6 py-3 text-gray-500
                    active:bg-[#7dc147] hover:bg-white-300 rounded shadow-md hover:scale-110 transition hover:ease-in
                    mr-1 mb-1 '>Home</button>
                    <button
                    className='  bg-white rounded-md font-bold uppercase text-sm px-6 py-3 text-gray-500
                    active:bg-[#7dc147] hover:bg-white-300 rounded shadow-md hover:scale-110 transition hover:ease-in
                    mr-1 mb-1 '>Projects</button>
                    <button
                    className='  bg-[#94221f] rounded-md font-bold uppercase text-sm px-6 py-3 text-white
                    active:bg-rose-600 hover:bg-rose-700 rounded shadow-md 
                    mr-1 mb-1 '>Log Out</button>
                </div>
        </nav>)
}
