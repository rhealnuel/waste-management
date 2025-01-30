import React, { useState } from 'react'
import tgtechimg from "../assets/tgpicsss.png"
import unionimg from "../assets/Union.png"
import { GrLocation } from "react-icons/gr";
import { RiPieChart2Fill } from "react-icons/ri";
import { IoTrashBinSharp } from "react-icons/io5";
import { MdOutlineSort } from "react-icons/md";
import { TbLetterX } from "react-icons/tb";
import { Link } from 'react-router-dom'

const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(false)

    function handleToggle (){
        setIsOpen(!false)
    }
  return (
    <div className=' h-[90vh] bg-[#E3F2E1]  w-[22vw] flex flex-col items-center'>
        <div className='flex items-center  gap-[22px] text-[#71BC68] text-[16px] font-[500] py-6'>
                <div><img src={tgtechimg} alt="" className='w-[40px] h-[40px] rounded-[16px]' /></div>
                <span className=' '>Oboh</span>
        </div>
        {/* <div className=' p-3 ml-5 flex gap-5'>
            {
                isOpen ? <MdOutlineSort onClick={() => setIsOpen(!isOpen)} className=' cursor-pointer w-[25px] h-[30px] text-[#f90a0af4]'/> : <TbLetterX onClick={() => setIsOpen(!isOpen)} className=' cursor-pointer w-[25px] h-[30px] text-[#f90a0af4]'  />
            }

            
        </div> */}


        <div className='bg-[#D9EFDE] w-[80%] p-5  flex flex-col justify-between shadow-xl rounded-2xl h-[60vh]'>
            <ul className=' leading-loose'>
                <div className='flex gap-4 p-2 items-center hover:bg-[#5D5FEF] text-[#737791] hover:text-[#fff] hover:rounded-2xl'>
                    <RiPieChart2Fill className='text-[24px] '/>
                    <li  className=' text-[16px] font-[600]   '><Link  >Dashboard</Link></li>
                </div>
                <div className='flex gap-4 p-2  items-center hover:bg-[#5D5FEF]  text-[#737791] hover:text-[#fff] hover:rounded-2xl '>
                    <GrLocation className=' text-[24px] '/>
                    <li  className= ' text-[16px] font-[600]'><Link to={'/dropsite'}>Locate Dustbin</Link></li>
                </div>
                <div className='flex gap-4 p-2 mb-6 items-center hover:bg-[#5D5FEF]  text-[#737791] hover:text-white hover:rounded-2xl'>
                    <IoTrashBinSharp className=' text-[24px]' />
                        <li  className=' text-[16px] font-[600] '><Link to={'/register'} >Home Pickups</Link></li>
                </div> 
            </ul>
            <div className='flex gap-4 '>
                <img src={unionimg} alt="" className='w-[20px] h-[25px]' />
                <li className=' hover:bg-[#71BC68] hover:text-white w-32 p-1 rounded-lg text-[#737791] text-[16px] font-[500] flex items-center justify-center'><Link >Sign Out</Link></li>
            </div>
                
        </div>
    
    </div>
  )
}

export default Sidebar