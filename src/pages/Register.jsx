import React, { useEffect, useState } from 'react'
import { LiaSearchSolid } from "react-icons/lia";
import wastevan from "../assets/wastevan.png"
import iconimage from "../assets/Iconimg.svg"
import axios from "axios";
import { Link } from 'react-router-dom';


const Register = () => {
  const [userDetails, setUserDetails] = useState(null)
  const [username, setUserName] = useState(null)
  const [formData, setFormData] = useState(
    {
      name: username?.[0] ,
      name2: "",
      email: userDetails?.email,
      phone: userDetails?.phone[0] ,
      address: "",
      address2: "",
      city: "",
      state: "",
      country: "",
      zip: ""

    }
  )
  const [formData2, setFormData2] = useState(
    {
      name2: username?.[0] ,
      name22: "",
      email2: userDetails?.email,
      
    }
  )

console.log(formData, formData2)

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value
    }));
};

const userEmail = localStorage.getItem("email")


const url = `http://localhost:8989/userdetails/${userEmail}`

useEffect(() => {
  const fetchData = async() => {
    const response = await axios.get(url)
    const data = await response.data
    console.log(data)
    setUserDetails(data.userDetails)
    
  }
  
  fetchData()

}, [])

useEffect(() => {
  const splitname = () => {
    setUserName(userDetails?.name.split(' '))
  }
  splitname()
}, [userDetails])



const handleSubmit = (e) => {
  e.preventDefault(); 

  // const formToSubmit = new FormData();

  // formToSubmit.append("name", "username[0]"); 
  // formToSubmit.append("email", userDetails?.email);
  // formToSubmit.append("phone", formData?.phone ?? ""); 
  // formToSubmit.append("address", formData?.address);
  // formToSubmit.append("address2", formData?.address2);
  // formToSubmit.append("city", formData?.city);
  // formToSubmit.append("state", formData?.state);
  // formToSubmit.append("country", formData?.country);
  // formToSubmit.append("zip", formData?.zip);
  const formToSubmit = {
    name: username[0] + " " + username[1], 
    email: userDetails?.email,
    phone: formData?.phone ?? "", 
    address: formData?.address,
    address2: formData?.address2,
    city: formData?.city,
    state: formData?.state,
    country: formData?.country,
    zip: formData?.zip
  };



  axios.post('http://localhost:8989/request/create', formToSubmit)
  .then(response => {
    console.log('Success:', response.data); 
  })
  .catch(error => {
    console.error('Error:', error);
  });
  // fetch('http://localhost:8989/request/create', {
  //   method: 'POST',
  //   body: formToSubmit, 
  // })
  // .then((response) => {
  //   if (!response.ok) {
  //     throw new Error(`HTTP error! status: ${response.status}`); 
  //   }
  //   return response.json();
  // })
  // .then((data) => {
  //   console.log('Success:', data);
  // })
  // .catch((error) => {
  //   console.error('Error:', error);
  // });

  // Logging 
  // for (const [key, value] of formToSubmit.entries()) {
  //   console.log(`${key}: ${value}`);
  // }

  // Accessing values from FormData can be tricky
  // Consider using a plain JavaScript object for easier access
  // 
  // Example:
  // const formDataObject = Object.fromEntries(formToSubmit); 
  // console.log(formDataObject.name); 

  // console.log(formToSubmit.get("name")); // Access value by key
  // console.log(username);
};

  return (
    <div className='lg:flex sm:columns-1'>
        <div>
            <div className='bg-[#E3F2E1] w-[36%] p-7 rounded-2xl absolute left-32 top-24 mb-14'>
                <h2 className='text-[#71BC68] text-[38px]'>Pickup Request</h2>

                <p className='text-[16px]'>If you have any questions, please don't hesitate to contact us. Please feel free to call us or contact by email and or phone number.</p>
            </div>

            <div className='bg-[#D8EDD5] lg:flex items-center w-fit p-4 ml-[180px] rounded-[20px] mb-16 mt-56' >
                <form  className=' items-center'>
                    
                    <div className='flex mb-8 mt-14'>
                          <div className=''>
                              <label htmlFor="" className='block'>Name</label>
                              <input type="text" name="name" onChange={handleChange} value={ username?.[0] }  className='mb-2 w-[295px] px-2 py-1 text-[16px] my-2 block' />  
                              <label htmlFor="" className='block text-gray-500'>First</label>
                          </div> 
                              
                            <div className='flex flex-col justify-end ml-2'>
                              <input type="text" name="name2" onChange={handleChange} value={username?.[1]}  className='mb-2 w-[295px] px-2 py-1 text-[16px] my-2' />  
                              <label htmlFor="" className='block text-gray-500'>Last</label>
                            </div>
                    </div>

                      <div>
                            <div className='flex mb-8'>
                                <div className=''>
                                    <label htmlFor="" className='block'>Email</label>
                                    <input type="text" name="email" onChange={handleChange}  value={userDetails?.email } className='mb-2 w-[295px] text-[16px] px-2 py-1 my-2 block' />  
                                    
                                </div> 
                                    
                                  <div className='flex flex-col justify-end ml-2'>
                                    <label htmlFor="" className='block'>Phone</label>
                                    <input type="text" name="phone" onChange={handleChange} value={userDetails?.phone[0] === ""? formData.phone : userDetails?.phone[0] } className='mb-2 w-[245px] px-2 py-1 text-[16x] my-2' />  
                                  
                                  </div>
                            </div>
                      </div>

                    
                    <p>Address</p>
                    <input type="text" value={formData.address} name='address' onChange={handleChange} className='mb-10 w-[600px] px-2 py-1 text-[18px]' />
                    <p >Address Line 2</p>
                    <input type="text" name="address2" value={formData.address2} onChange={handleChange} className='mb-10 w-[600px] px-2 py-1 text-[18px]' />
                    <div className='mb-8'>
                            <div className='flex mb-14'>
                                <div className=''>
                                    <label htmlFor="" className='block'></label>
                                    <input type="text" name="city" value={formData.city} onChange={handleChange} className='mb-2 w-[295px] text-[16px] px-2 py-1 my-2 block' />
                                    <label htmlFor="" className='block'>City</label>
                                    
                                </div> 
                                    
                                  <div className='flex flex-col justify-end ml-2'>
                                    <input type="text" name='state' value={formData.state} onChange={handleChange} className='mb-2 w-[295px] px-2 py-1 text-[16x] my-2' />  
                                    <label htmlFor="" className='block'>State/Province/Region</label>
                                  </div>
                            </div>

                            <div className='flex flex-col justify-end ml-2'>
                                    <input type="text" name='country' value={formData.country} onChange={handleChange} className='mb-2 w-[295px] px-2 py-1 text-[16x] my-2' />  
                                    <label htmlFor="" className='block'>Country</label>
                                  </div>
                      </div>
                      <div className='mt-16'>
                        <input type="number" value={formData.zipcode} name='zip' onChange={handleChange} className='mb-4 w-[295px] px-2 py-1 text-[20px] block' /> 
                        <label htmlFor="">Zip/Postal Code</label>
                      </div>
                    

                    <Link to={'/HomePicks'}>
                    <button
                    onClick={handleSubmit}
                    className=' mt-52 bg-[#fff] p-3 items-center justify-center w-24  shadow-2xl shadow-[#00000065] hover:bg-green-800 hover:text-white '>SUBMIT
                    </button>
                    </Link>




                </form>

            </div>



        </div>

      <div className='bg-[#E2F1E0] w-[30%] block ml-10 p-6 rounded-2xl mt-14 mb-72'>
        <div className=' mb-16 flex bg-[#000000] bg-opacity-[5%] w-fit items-center px-4'>
          <input type="text" placeholder='Search' className='p-2  bg-transparent outline-none w-72  text-[#757575] text-[14px]'/>
          <LiaSearchSolid className=' text-[14px] text-[#B94F4F] text-opacity-[70%] cursor-pointer' />
        </div>

        <div className=' mb-6'>
          <img src= {wastevan} alt="" className='w-[335px] h-[190px]' />
        </div>

        <div className=' mb-6' >
          <h1 className='text-[24px] font-[400] mb-6'>Valuable Substances in e-waste</h1>

          <p className='text-[14px] text-[#000000] text-opacity-[60%] font-[400]'>E-waste contains different types of valuable materials. Most of the valuable substances are found in printed circuit boards (PCB), ...</p>
        </div>


        <div className='bg-[#007932] text-[#fff] w-fit px-5 py-3 mb-6'>
          <button>READ MORE</button>
        </div>

        <div className='mb-6'>
          <p className='cursor-pointer'>...</p>
        </div>

        <div className='bg-[#000000] bg-opacity-[5%] w-[100%] flex flex-col items-center justify-center mb-24 '>
         <Link to={'/dropsite'}>
         <img src={iconimage} alt="" className='mt-8 cursor-pointer' />
         </Link> 
          <h1 className=' p-5  mb-8 items-center'>Find The Nearest Location</h1>
        </div>


      </div>


    </div>
  )
}

export default Register