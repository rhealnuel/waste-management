import React from 'react'
import imgOne from "../assets/tgtechLogo.jpg";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";


const Footer = () => { (
    <section>
        <div className='flex w-[1440px] h-[524px] p-12 bg-[#71BC68] rounded-2xl'>
            <div>
                <img src={imgOne} alt="image" />
            </div>

            <div>
                <h3>Contact</h3>
                <p>Careers</p>
                <p>Benefits</p>
                <p>Notice Board</p>
                <p>Explore</p>
                <p>Trails</p>
            </div>

            <div>
            <h3>Company</h3>
                <p>About</p>
                <p>Jobs</p>
                <p>Supports</p>
            </div>

            <div>
                <input type="email" placeholder='Enter your email' />
            </div>

            <div>
                <button>FEEDBACK</button>
            </div>
        </div>

        <hr className='text-[#E3F2E1] p-2' />
        <div>
            <div></div>

            <div className='text-[#E3F2E1]'>
            <FaFacebookF/>
            <FaInstagram/>
            <FaXTwitter/>
            <FaLinkedinIn />

            </div>
        </div>
    </section>
  )
}

export default Footer