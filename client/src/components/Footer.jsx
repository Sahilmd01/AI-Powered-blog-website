import React from 'react'
import { assets, footer_data } from '../assets/assets'
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { RiMediumFill } from 'react-icons/ri'

const Footer = () => {
  const socialIcons = [
    { icon: <FaTwitter className="text-xl" />, name: 'Twitter', color: 'hover:text-blue-400' },
    { icon: <FaFacebookF className="text-xl" />, name: 'Facebook', color: 'hover:text-blue-600' },
    { icon: <FaInstagram className="text-xl" />, name: 'Instagram', color: 'hover:text-pink-600' },
    { icon: <FaLinkedinIn className="text-xl" />, name: 'LinkedIn', color: 'hover:text-blue-700' },
    { icon: <FaYoutube className="text-xl" />, name: 'YouTube', color: 'hover:text-red-600' },
    { icon: <RiMediumFill className="text-xl" />, name: 'Medium', color: 'hover:text-gray-800' }
  ]

  return (
    <footer className='bg-gradient-to-b from-white to-gray-50 relative z-10 border-t border-gray-100'>
      <div className='px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8 sm:py-12'>
        <div className='rounded-xl bg-white p-6 sm:p-8 md:p-10 lg:p-12 shadow-lg border border-gray-100'>
          <div className='flex flex-col lg:flex-row items-start justify-between gap-8 sm:gap-10 lg:gap-12 pb-8 sm:pb-10'>
            {/* Brand Section */}
            <div className='w-full lg:max-w-md'>
              <div className='flex items-center gap-2 sm:gap-3'>
                <img 
                  src={assets.logo} 
                  alt="Blogni logo" 
                  className='w-28 sm:w-32 md:w-36 transition-transform hover:scale-105' 
                />
                <span className='text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent'>
                  Blogni
                </span>
              </div>
              <p className='mt-4 sm:mt-5 md:mt-6 text-gray-600 text-sm sm:text-base leading-relaxed'>
                Blogni is where your words belong. From everyday thoughts to expert insights, we make it simple to write, publish, and connect — all in one clean, welcoming platform.
              </p>
              
              {/* Social Icons */}
              <div className='flex gap-3 sm:gap-4 mt-4 sm:mt-5 md:mt-6 flex-wrap'>
                {socialIcons.map((social, index) => (
                  <a 
                    key={index}
                    href="#"
                    className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors ${social.color}`}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Links Section */}
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 w-full lg:w-auto'>
              {footer_data.map((section, index) => (
                <div key={index} className='min-w-[120px] sm:min-w-[150px]'>
                  <h3 className='font-semibold text-base sm:text-lg text-gray-900 mb-3 sm:mb-4'>{section.title}</h3>
                  <ul className='space-y-2 sm:space-y-3'>
                    {section.links.map((link, i) => (
                      <li key={i}>
                        <a
                          href="#"
                          className='text-gray-600 text-sm sm:text-base hover:text-purple-600 transition-colors flex items-start gap-2'
                          aria-label={link}
                        >
                          <span className='mt-1.5 sm:mt-1 w-1 h-1 rounded-full bg-gray-400'></span>
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div className='pt-6 sm:pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4'>
            <p className='text-gray-500 text-xs sm:text-sm text-center md:text-left'>
              Copyright &copy; 2025 Blogni | All Rights Reserved.
            </p>
            
            <div className='flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6'>
              <a href="#" className='text-gray-500 hover:text-gray-700 text-xs sm:text-sm'>Privacy Policy</a>
              <a href="#" className='text-gray-500 hover:text-gray-700 text-xs sm:text-sm'>Terms of Service</a>
              <a href="#" className='text-gray-500 hover:text-gray-700 text-xs sm:text-sm'>Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
