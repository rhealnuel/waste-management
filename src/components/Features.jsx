import React from 'react'
import Featureimage1 from "../assets/image2.png"
import Featureimage2 from "../assets/image3.png"
import Featureimage3 from "../assets/image5.png"


const Features = () => {

    const featureArray = [
        {
            id: 1,
            image: Featureimage1,
            head: "Collecting",
            text: "We provide convenient drop-off locations and pick-up services to make recycling your e-waste hassle-free. Your old devices are carefully collected to prevent improper disposal.",
        },
        {
            id: 2,
            image: Featureimage2,
            head: "Processing",
            text: "Our state-of-the-art facilities employ eco-friendly methods to dismantle and sort e-waste. We recover valuable materials and ensure the safe disposal of hazardous components.",
        },
        {
            id: 3,
            image: Featureimage3,
            head: "Saving Earth",
            text: "By recycling e-waste, you help us reduce the environmental burden of electronic waste. We divert harmful materials from landfills, conserve resources, and minimize pollution.",
        },
    ]



    return (
        <div>
            <div className="bg-[#E3F2E1] grid  lg:grid-cols-4 px-4 lg:px-20 py-10 rounded-2xl gap-12 text-[#71BC68]">
                <div className='flex flex-col gap-6 items-center lg:items-start'>
                    <div>
                        <h4 className='text-[14px] font-[400]'>FEATURES</h4>
                    </div>
                    <div>
                        <p className='lg:text-[38px] text-[25px] text-center lg:text-start font-[650]'>
                            What we do with your E-Waste.
                        </p>
                    </div>
                    <div>
                        <button className='bg-[#71BC68] text-[#fff] px-4 py-2 rounded-full'>Learn More</button>
                    </div>
                </div>
                
            {
                featureArray.map((item)=>(
                    <div className='flex flex-col gap-4 items-center lg:items-start '>
                        <div><img src={item.image} alt="" /></div>
                        <div><p className=' font-[600]'>{item.head}</p></div>
                        <div><p className=''>{item.text}</p></div>
                    </div>

                ))
            }
                
               
            </div>
        </div>
    )
}

export default Features