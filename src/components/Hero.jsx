import React from 'react'
import heroimage from "../assets/heroimage.png"


const Hero = () => {
    return (
        <div className=''>
            <div className='flex lg:flex-row flex-col justify-between  py-20  items-center w-[100%] px-4 lg:px-20 gap-24 '>
                {/* text */}
                <div className='text-white flex flex-col gap-6 lg:gap-10 w-[90%] items-center lg:items-start'>
                    <div>
                        <p className=' lg:w-[500px] text-[40px] lg:text-[65px] leading-tight lg:leading-[75px]  font-semibold text-center lg:text-start'>E-Waste is the New Gold Mine</p>
                    </div>

                    <div className=''>
                        <p className='lg:w-[400px]  text-[15px] leading-[28.8px] text-center lg:text-start'>Sustainably Dispose, Earn Rewards: Discover the Nearest E-Waste Collection
                            Centers, Learn About the Impact, and Earn Credits for Responsible Recycling.</p>
                    </div>

                    <div>
                        <button className='rounded-[50px] py-2 px-4 bg-white text-[#71BC68]'>Earn from E-waste</button>
                    </div>
                </div>

                {/* image */}
                <div className='w-[100%] flex  justify-center' >
                    <img src={heroimage} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero