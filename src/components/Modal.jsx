import React, { useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";

const Modal = ({ isVisible, onClose }) => {
    const [location, setLocation] = useState('')
    
    
    const addLocation = (e) => {
        e.preventDefault()
    
        fetch('http://localhost:8989/location/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // JSON format
            },
            body: JSON.stringify({ "location": location }),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
            onClose()
            window.location.reload()
        })
        .catch((error) => {
            console.error('Error:', error);
        });


    }
    
    
    
if (!isVisible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm  flex  justify-center items-center ">
      <div className="w-[500px]  absolute ">
        <div className="bg-white p-4 rounded-lg leading-8">
          <LiaTimesSolid
            onClick={() => onClose()}
            className="relative top-0 cursor-pointer place-self-end mb-2 text-[30px] rounded-md hover:bg-red-300 hover:text-white "/>

            <form className="flex flex-col p-2 " onSubmit={addLocation} >
               <label htmlFor="">Add Location</label> 
               <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Enter location" className="outline-green-600 pl-2" />
                <button type="submit" className=" mt-10 flex justify-center items-center bg-[#71BC68] text-white px-2 rounded-md hover:bg-green-500">Update</button>
            </form>

        </div>
      </div>
    </div>
  );
};

export default Modal;
