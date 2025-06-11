import React from 'react'
import { assets, footer_data } from '../assets/assets'

const Footer = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl-px-32 footer'>
     <div className='flex flex-col md:flex-row items-start justify-between gap-10
     py-10 border-b border-gray-500 text-gray-300'>
       <div>
        <img src={assets.logo} alt="logo" className='w-32 sm:w-44'/>
        <p className='max-w-[410px] mt-6'>Quickblog is where your words belong. From everyday thoughts to expert insights, we make it simple to write, publish, and connect — all in one clean, welcoming platform.</p>
       </div>
       
       <div className='flex flex-wrap justify-between w-full
       md:w-[45%] gap-5'>
           {footer_data.map((section, index) => (
            <div key={index}>
              <h3 className='font-semibold text-base text-gray-300 md:mb-5 mb-2'>{section.title}</h3>
              <ul className='text-sm space-y-1'>
                {section.links.map((link, i) => (
                    <li key={i}>
                        <a href="#" className='hover:underline transition text-gray-300'>{link}</a>
                    </li>
                ))}
              </ul>
            </div>
           ))}
       </div>


     </div>
     <p className='py-4 text-center text-sm md:text-base text-gray-300'>Copyright 2025 &copy; Quickblog | All Right Reserved.</p>
    </div>
  )
}

export default Footer