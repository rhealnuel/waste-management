import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import image1 from "../assets/tgtechLogo.jpg"

const Footer = () => {
  return (
    <div className='p-10 overflow-x-hidden border-2 border-[#fff] rounded-2xl '>
        <div className='w-screen grid grid-cols-2 lg:grid-cols-5 text-[#E3F2E1] '>
            <h3 className=''>
                <img src={image1} className='w-[170px] h-[190px] rounded-2xl' alt="image" />
            </h3>
            <div className='flex flex-col'>
                <h2 className='text-[16px] font-[600] mb-4'>Contact</h2>
                <Link to="/" className='mb-3'>Careers</Link>
                <Link to="/" className='mb-3'>Benefits</Link>
                <Link to="/" className='mb-3'>Notice Board</Link>
                <Link to="/"className='mb-3'>Explore</Link>
                <Link to="/">Trails</Link>
            </div>

            <div className='flex flex-col'>
                <h2 className='text-[16px] font-[600] mb-4'>Company</h2>
                <Link className='mb-3'>About</Link>
                <Link className='mb-3'>Job</Link>
                <Link>Support</Link>
            </div>

            <div className='p-5 rounded-20 col-span-2 relative'>
                <input type="text" placeholder='Enter your email' className='text-[#71BC68] bg-[#E3F2E1] outline-none p-2 rounded-full w-[300px] lg:w-[400px] relative' /> 
                <button className='absolute top-6 right-24 bg-[#71BC68] text-[#E3F2E1] rounded-full p-1 hover:bg-green-600 hover:text-white'>Subscribe</button>
            </div>
        </div>
        <hr className='p-2 mt-20' />
        <div className='flex justify-end relative top-4 space-x-4 text-[#fff] cursor-pointer'>
        <a href="https://web.facebook.com/oboh.thankgod1/" target='_blank'><FaFacebookF /></a>
        <a href="https://www.instagram.com/oboh.jr_tg/?hl=en" target='_blank'><FaInstagram/></a>
        <a href="https://x.com/Obohjr_tg" target='_blank'><FaXTwitter/></a>
        <FaLinkedin/>
        </div>
    </div>
  )
}

export default Footer