import React from 'react'
import Whatimage1 from "../assets/image7.png"
import Whatimage2 from "../assets/image8.png"
import Whatimage3 from "../assets/image9.png"

const Whatwill = () => {

    const whatwillArray = [
        {
            id: 10,
            image: Whatimage1,
            head: "Clean your home from E-Waste ",
            text: "Clean your home from piles of E-waste without worry.",
        },
        {
            id: 11,
            image: Whatimage2,
            head: "Earn Rewards & Cash",
            text: "Collect points for you E-Wate and turn into cash and vouchers",
        },
        {
            id: 12,
            image: Whatimage3,
            head: "Support Nature ",
            text: "Your valuable contribution in saving nature.",
        },
    ]
  return (
    <div className='grid lg:grid-cols-4 lg:px-20 px-4 py-10 gap-12 text-[#fff]  '>
        <div className='flex flex-col gap-7 lg:items-start items-center'>
            <div className='text-[36px] font-[600] text-center lg:text-start'>
            What will you get by giving away of your E-waste?
            </div>

            <div>
                <button className='bg-[#fff] px-4 py-2 text-[#71BC68] rounded-full'>Learn more</button>
            </div>


        </div>
            {
                whatwillArray.map((item)=>(
                    <div className='flex flex-col gap-4 items-center text-center lg:text-start lg:items-start '>
                        <div><img src={item.image} alt="" /></div>
                        <div><p>{item.head}</p></div>
                        <div><p className='text-[14px]'>{item.text}</p></div>
                    </div>
                ))
            }


    </div>
  )
}

export default Whatwill