import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* col-1 */}
        <div>
           <img className='mb-5 w-40' src={assets.logo} alt="" />
           <p className='w-full md:w-2/3 text-gray-600 leading-6' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus maxime ipsum repudiandae ipsa voluptatibus, quam pariatur ab quisquam earum in!</p>
          </div>    

        {/* col-2 */}
        <div>
          <p className='text-xl font-medium mb-5'>Company</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* col-3 */}
        <div>
          <p className='text-xl font-medium mb-5'>GET in TOUCH </p>
          <ul  className='flex flex-col gap-2 text-gray-600'>
            <li>11001-10101</li>
            <li>Test@gmail.com</li>
          </ul>
        </div>

      </div>
{/* ----copyright-txt */}
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024@Prescripto All Rights Reserved </p>
      </div>
    </div>
  )
}

export default Footer
