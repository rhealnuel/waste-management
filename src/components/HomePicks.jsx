import React from 'react'

const HomePicks = () => {
  return (
    <div>

        <div className="bg-[#E3F2E1] mx-auto  w-[700px] rounded-2xl p-6 mb-20 ">
                  <div>
                    <h1 className=" flex items-center justify-center mb-4 text-[29px] font-[700] text-[#71BC68]">
                      YOUR WASTE DETAILS
                    </h1>
                    <div className="flex items-center justify-center mb-14 ">
                      <hr className="w-[220px]"></hr>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                      <div className="bg-white p-3 mb-8 leading-loose rounded-2xl">
                        <h1>Name : Uzoigwe Nnamdi</h1>
                        <h1>Customer ID : 23456789</h1>
                        <h1>Name : 080.........</h1>
                      </div>
                      <div className="p-3 mb-5 ">
                        <img
                          src={garbimg}
                          alt=""
                          className="w-[310px] h-[170px] rounded-xl"
                        />
                      </div>
                      <div className="bg-white p-3 mb-5 leading-loose rounded-2xl">
                        <h1>Pick Up Id- 5237</h1>
                        <h1>Pick Up Date: 26-09-2023</h1>
                        <h1>Pick Up Location : UNIVERSITY OF CALABAR</h1>
                        <h1>Preferd Time:</h1>
                      </div>
                      <div className="bg-white p-3 mb-5 leading-loose rounded-2xl">
                        <h1>Name : Oboh Thankgod</h1>
                        <h1>Customer ID : 23456789</h1>
                        <h1>Name : 080.........</h1>
                      </div>
        
                      <div className="bg-white p-3 mb-5 leading-loose rounded-2xl">
                        {/* <h1>EARNINGS </h1> */}
                        <h1>Name : Arikpo Stanley</h1>
                        <h1>Customer ID : 23456789</h1>
                        <h1>Name : 080.........</h1>
                      </div>
                      <div className="bg-white p-3 mb-5 leading-loose rounded-2xl">
                        <h1>Name : Kawekwune Nuel</h1>
                        <h1>Customer ID : 23456789</h1>
                        <h1>Name : 080.........</h1>
                      </div>
                    </div>
                  </div>
                  <h1 className="absolute mt-[-178px] ml-3 text-[22px] font-[700]">
                    EARNINGS{" "}
                  </h1>
                </div>



    </div>
  )
}

export default HomePicks