import React from 'react'
import { assets, footer_data } from '../assets/assets'

const Footer = () => {
  return (
    <footer className='bg-white relative z-10'>
      <div className='px-6 md:px-16 lg:px-24 xl:px-32'>
        <div className='rounded-xl backdrop-blur-md bg-white/40 p-6 md:p-10
          shadow-[0_0_20px_0_rgba(255,0,255,0.3),0_0_20px_0_rgba(0,255,255,0.3)]
          border border-white/30 mb-6'>


          <div className='flex flex-col md:flex-row items-start justify-between gap-10
            border-b border-gray-300 text-gray-800 pb-8'>

            <div>
              <img src={assets.logo} alt="Blogni logo" className='w-32 sm:w-44' />
              <p className='max-w-[410px] mt-6'>
                Blogni is where your words belong. From everyday thoughts to expert insights, we make it simple to write, publish, and connect — all in one clean, welcoming platform.
              </p>
            </div>

            <div className='flex flex-wrap justify-between w-full md:w-[45%] gap-5'>
              {footer_data.map((section, index) => (
                <div key={index}>
                  <h3 className='font-semibold text-base text-gray-800 md:mb-5 mb-2'>{section.title}</h3>
                  <ul className='text-sm space-y-1'>
                    {section.links.map((link, i) => (
                      <li key={i}>
                        <a
                          href="#"
                          className='hover:underline transition text-gray-700'
                          aria-label={link}
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>

          <p className='pt-6 text-center text-sm md:text-base text-gray-700'>
            Copyright &copy; 2025 Blogni | All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer