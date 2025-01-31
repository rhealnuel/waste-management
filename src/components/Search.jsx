import React from 'react'
import { BsTruckFlatbed } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { IoCartOutline } from "react-icons/io5";
import { TbCurrencyNaira } from "react-icons/tb";
import { LuSearch } from "react-icons/lu";
import mapimage from "../assets/mapp.png"
import serviceimage1 from "../assets/serviceimage1.png"
import serviceimage2 from "../assets/serviceimage2.png"
import serviceimage3 from "../assets/serviceimage4.png"
import serviceimage4 from "../assets/serviceimage5.png"
import serviceimage5 from "../assets/serviceimage6.png"





const Search = () => {
    const iconsArray = [
        {
            id:1,
            icons: <GrLocation/>,
            text: "Locate"
        },
        {
            id:1,
            icons: <IoCartOutline/>,
            text: "Collect"
        },
        {
            id:1,
            icons: <BsTruckFlatbed/>,
            text: "Pick up"
        },
        {
            id:1,
            icons: <TbCurrencyNaira/>,
            text: "Earn"
        },
    ]


    const serviceArray = [
        {
            id: 1,
            image: serviceimage1,
            head: "Recycling of E-waste",
            text: "Envirocare is engage in Recycling of Electrical and Electronic Equipment Waste (WEEE). The aim of the company is toconserve the environment and natural resources.",
        },
        {
            id: 1,
            image: serviceimage2,
            head: "Recycling of E-waste",
            text: "Envirocare support Manufacturer, Importer of Electronics equipments , for implementing their EPR plan and achieving their target by recycling of e-waste.",
        },
        {
            id: 1,
            image: serviceimage4,
            head: "Recycling of E-waste",
            text: "We support large corporates for their CSR target by installing E-Bin, setting of collection Center, running collection Drive for e-waste, conducting training and awareness program.",
        },
        {
            id: 1,
            image: serviceimage3,
            head: "Recycling of E-waste",
            text: "Envirocare offer services of Data Destruction for its customer by destroying data store on tapes, hard Disk and other forms of electronic media.",
        },
        {
            id: 1,
            image: serviceimage4,
            head: "Recycling of E-waste",
            text: "E-waste consist more than 35 substance in which some are recyclable, Precious, Special, & Hazardous metals. These metals require special process for recovery and refining.",
        },
        {
            id: 1,
            image: serviceimage5,
            head: "Recycling of E-waste",
            text: "Envirocare has its own Repair and Refurbishing centre for E-waste received from generator. We have a skilled team of Engineers Technicians.",
        },
    ]

  return (

    <div className='flex flex-col gap-4 lg:gap-20 px-4 lg:px-20 py-10 bg-[#E3F2E1]'>
        {/* text */}
        <div>
            <p className='text-[#71BC68] text-center  text-[26px] md:text-[36px] lg:text-[36px]'>HOW DOES  THE PROCESS WORK?</p>
        </div>
        
        <div  className='flex flex-col gap-6 bg-[#71BC68] rounded-[15px] p-5 md:w-auto w-[100%] items-center'>
            <div className='flex justify-center w-[90%] lg:w-[50%] bg-white rounded-lg items-center px-2'>
                    <input type="text" placeholder='SEARCH HERE ' className='p-2 w-[100%] outline-none rounded-lg text-[12px] text-[#71BC68]' /> 
                    <LuSearch className=' text-[#71BC68] cursor-pointer  text-[22px]' />

            </div>
            <div className='flex flex-col gap-4 lg:flex-row justify-between w-[90%] items-center'>
                <div className='flex lg:flex-col justify-evenly w-[100%]'>
                    {
                        iconsArray.map((item)=>(
                            <div className='flex flex-col lg:flex-row items-center lg:gap-4  '>
                                
                                <div className='lg:text-[65px] text-[20px]'>{item.icons}</div>
                                <div><p className='lg:text-[44px] text-[14px] font-[400] text-[#fff] lg:py-4'>{item.text}</p></div>
                            </div>
                        ))
                    }
                
                </div>

                <div className=' w-full'>
                    <img src={mapimage} alt="" className='lg:w-[100%]'/>
                </div>

            </div>
        </div>

          
        {/* services */}
        <div className='bg-[#71BC68] p-7 rounded-2xl text-center justify-center text-[#fff] lg:text-[14px] font-[400]'>
            <div className='text-center justify-center gap-4 pb-7  '>
                <div className='p-4'>
                    <p className='text-[32px] font-[400] text-[#000]'>Services <span className='text-[#007932]'>We Provide</span></p>
                </div>
                <div>
                    <p>We offer total solution for End to end Recycling of e waste with state of art recycling facility. We also support for CSR Services, EPRImplementation and Data Destruction Services</p>
                </div>
            </div>

            <div className='lg:grid grid-cols-3 text-center justify-center'>

                {
                    serviceArray.map((item) => (
                        <div className='flex flex-col text-center items-center gap-4 p-4'>

                                    <img src={item.image} alt="" />

                                <div><h4 className='text-[#000] text-[18px] font-[400]'>{item.head}</h4></div>

                                <div>
                                    <p>{item.text}</p>
                                </div>
                            
                        </div>
                    ))
                }
        
            </div>


        </div>
            
    </div>
  )
}

export default Search

