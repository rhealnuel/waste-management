import React from 'react'
import tomimage from "../assets/tomfisk3.jpg"

const Inside = () => {
  return (
    <div>
        <div className='bg-white'>
            <div className='relative'>
                <img src={tomimage} alt="" className='lg:h-[580px]  w-screen  ' />
                <div className=' absolute top-0 h-[100%] w-[100%] bg-black opacity-[25%] '></div>
            </div>
                <div className='bg-white'>

                        <div className=' grid lg:grid-cols-2 lg:w-[85%] gap-4 lg:gap-10 items-center lg:ml-24 lg:p-8 p-4 '>
                            <div className='bg-green-600 p-6 pt-3 h-64 rounded-[20px] shadow-sm shadow-black'>
                                <h1 className=' text-[26px] font-[600] text-white'>About Us</h1>
                                <p className='text-[14px] lg:text-[16px]'>Welcome to TG-WASTE, where we are revolutionizing the way waste is managed in urban environments. Our mission is to create a cleaner, greener, and more sustainable world by leveraging cutting-edge technology to optimize waste collection routes, enhance home waste pickups, and encourage recycling.</p>
                            </div>
                                <div className='bg-green-600 p-3 h-64 rounded-[20px] shadow-sm shadow-black'>
                                    <h1 className=' text-[26px] font-[600] text-white'>Who We Are</h1>
                                    <p className='text-[14px] lg:text-[16px]'>At TG-WASTE, we are a passionate team of environmental enthusiasts, technologists, committed to transforming waste management. With a deep understanding of the challenges faced by our environs and/or municipalities, waste management companies, and households, we aim to provide innovative solutions that not only enhance efficiency but also promote eco-friendly practices.</p>
                                </div>
                                    <div className='bg-[#E36F34] p-6 h-64 rounded-[20px] text-white shadow-sm shadow-black'>
                                    <h1 className=' text-[26px] font-[600]'>Our Mission</h1>
                                    <p className='text-[14px] lg:text-[16px]'>Our mission is to revolutionize the way waste is managed, making it more efficient, cost-effective, and eco-friendly. We aim to empower communities, businesses, and individuals to take control of their waste management, promoting a cleaner and healthier environment for future generations.</p>
                                    </div>
                                        <div className='bg-[#E36F34] p-6 pt-3 h-64 rounded-[20px] text-white shadow-sm shadow-black'>
                                        <h1 className=' text-[26px] font-[600]'>Our Technology</h1>
                                        <p className='text-[14px] lg:text-[16px]'>Our smart waste management system utilizes advanced algorithms, Automated Messaging Alert, and data analytics to optimize waste collection routes, reducing fuel consumption, emissions, and operational costs. Our platform also provides real-time monitoring, enabling waste management operators to make data-driven decisions and improve their services.</p>
                                        </div>


                        </div>
                            {/* <hr className='text-black '/> */}
                            <div className='bg-green-500 '>
                                <div className='flex lg:flex-row flex-col border-t-4 border-b-4k text-white items-center justify-center gap-10'>
                                    
                                    <div className='p-3'>
                                        <h2 className='text-center'>WE HELP IN RESPONSIBLE SMART WASTE MANAGEMENT SYSTEM</h2>
                                    </div>
                                    <div className='p-3'>
                                        <h2 className='text-center'>WE HELP IN RESPONSIBLE SMART WASTE MANAGEMENT SYSTEM</h2>
                                    </div>
                                </div>
                            </div>
                </div>

                        <div >
                            <div className='flex items-center justify-center text-[26px] lg:text-[30px] font-[600] lg:pt-16 underline lg:pb-4 lg:mt-1 pt-4 text-[#575757]'><h1 >Our Values</h1></div>
                            <div className='grid lg:grid-cols-3 p-4 lg:p-24 gap-10 lg:pb-56 bg-white'>
                                <div className='bg-white p-6 rounded-2xl shadow-lg '>
                                    <div className='flex mb-4'>
                                        <img src="" alt="" />
                                        <h2 className='text-[22px] font-[600]'>Ownership</h2>
                                    </div>
                                    <p className='text-[14px]'>We belive when  you own something, you have a responsibility to take care of it. This is why we provide our clients with easy and convenient way to collect their waste/recyclables at their doorstep.</p>
                                </div>
                                        <div className='bg-white p-6 rounded-2xl shadow-lg '>
                                            <div className='flex mb-4'>
                                                <img src="" alt="" />
                                                <h2 className='text-[22px] font-[600]'>Customer First</h2>
                                            </div>
                                                <p className='text-[14px]'>We belive when you own something, you have a responsibility to take care of it. This is why we provide our clients with easy and convenient way to collect their waste/recyclables at their doorstep.</p>
                                        </div>
                                                    <div className='bg-white p-6 rounded-2xl shadow-lg '>
                                                        <div className='flex mb-4'>
                                                            <img src="" alt="" />
                                                            <h2 className='text-[22px] font-[600]'>Responsibility</h2>
                                                        </div>
                                                            <p className='text-[14px]'>We belive when you own something, you have a responsibility to take care of it. This is why we provide our clients with easy and convenient way to collect their waste/recyclables at their doorstep.</p>
                                                    </div>
                                                                <div className='bg-white p-6 rounded-2xl shadow-lg '>
                                                                    <div className='flex mb-4'>
                                                                        <img src="" alt="" />
                                                                        <h2 className='text-[22px] font-[600]'>Education</h2>
                                                                    </div>
                                                                        <p className='text-[14px]'>We belive when you own something, you have a responsibility to take care of it. This is why we provide our clients with easy and convenient way to collect their waste/recyclables at their doorstep.</p>
                                                                </div>
                                                                            <div className='bg-white p-6 rounded-2xl shadow-lg '>
                                                                                <div className='flex mb-4'>
                                                                                    <img src="" alt="" />
                                                                                    <h2 className='text-[22px] font-[600]'>Passion to Deliver</h2>
                                                                                </div>
                                                                                    <p className='text-[14px]'>We belive when you own something, you have a responsibility to take care of it. This is why we provide our clients with easy and convenient way to collect their waste/recyclables at their doorstep.</p>
                                                                            </div>
                                                                                    <div className='bg-white p-6 rounded-2xl shadow-lg '>
                                                                                        <div className='flex mb-4'>
                                                                                            <img src="" alt="" />
                                                                                            <h2 className='text-[22px] font-[600]'>Respect for People</h2>
                                                                                        </div>
                                                                                            <p className='text-[14px]'>We belive when you own something, you have a responsibility to take care of it. This is why we provide our clients with easy and convenient way to collect their waste/recyclables at their doorstep.</p>
                                                                                    </div>
            
                            </div>
                        </div>

        </div>


    </div>
  )
}

export default Inside