import React, {useEffect, useState} from 'react'
import { TfiReload } from "react-icons/tfi";
import { RiDeleteBin6Line } from "react-icons/ri";
import Modal from './Modal';


const LastSeen = ({ timestamp }) => {
    const [timeAgo, setTimeAgo] = useState("");
  
    // Function to calculate the "time ago" format
    const calculateTimeAgo = (timestamp) => {
        const now = new Date();
        const lastSeen = new Date(timestamp); // Convert timestamp to Date object
        const diffInMs = now - lastSeen; // Time difference in milliseconds
    
        const seconds = Math.floor(diffInMs / 1000); // Convert to seconds
        if (seconds < 60) {
          return "Updated now";
        }
    
        const minutes = Math.floor(seconds / 60); // Convert to minutes
        if (minutes < 60) {
          return minutes === 1 ? "Updated 1 minute ago" : `Updated ${minutes} minutes ago`;
        }
    
        const hours = Math.floor(minutes / 60); // Convert to hours
        if (hours < 24) {
          return hours === 1 ? "Updated 1 hour ago" : `Updated ${hours} hours ago`;
        }
    
        const days = Math.floor(hours / 24); // Convert to days
        return days === 1 ? "Updated 1 day ago" : days >= 7 ? "Ready for collection": `Updated ${days} days ago`;
      };
    
      useEffect(() => {
        setTimeAgo(calculateTimeAgo(timestamp)); // Update the timeAgo state
      }, [timestamp]); // Recalculate when the timestamp changes
    
      return <span>{timeAgo}</span>;
    };
    
  

const Tables = () => {
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState()



    const fetchData = () => {
        fetch('http://localhost:8989/location/')
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data?.locations);
            setData(data?.locations)
        })
        .catch((error) => {
            console.error('Error:', error);
        });

    }

    useEffect(() => {
        fetchData()
    }, [])


    const handleEdit = (id) => {
        fetch(`http://localhost:8989/location/edit/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json', // JSON format
            },
            body: JSON.stringify({ "location": location }),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
            window.location.reload()
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

  return (
    <div className='w-[76vw] ml-[-100px]'>
        <div className='text-[#D9EFDE] font-[500] ml-32 mt-8'>Welcome back Oboh!</div>
        
        <button  onClick={() => setShowModal(true)}
            className="cursor-pointer flex justify-self-end bg-white px-2 py-1 rounded-lg text-[#71BC68] font-semibold hover:bg-green-600 hover:text-white" >Add Location</button>

        <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
        

        <div className=' flex items-center justify-center w-screen'>
        <table className="min-w-[60%] mt-20 ml-[-190px] text-[#D9EFDE] outline outline-2">
  <thead className="text-[24px] font-[600] text-[#D9EFDE]">
    <tr>
      <td className="border px-2">S/N</td>
      <td className="border px-2">Location</td>
      <td className="border px-2">Status</td>
      <td className="border px-2">Update Status</td>
      <td className="border px-2">Deletion</td>
    </tr>
  </thead>

  <tbody className="leading-loose">
    {data?.map((item, index) => (
      <tr className="outline outline-1" key={item._id}>
        <td className="border px-4 text-center">{index + 1}</td>
        <td className="border px-4 w-72">{item.location}</td>
        <td className="border px-4">
          <LastSeen timestamp={item.updatedAt} />
        </td>
        <td className="border px-4 text-center">
          <div className="flex justify-center items-center">
            <span
              onClick={() => handleEdit(item?._id)}
              className="text-[22px] p-2 cursor-pointer"
            >
              <TfiReload />
            </span>
          </div>
        </td>
        <td className="border px-4 text-center">
          <div className="flex justify-center items-center">
            <span
              onClick={() => handleDelete(item?._id)}
              className="text-[22px] p-2 cursor-pointer"
            >
              <RiDeleteBin6Line />
            </span>
          </div>
        </td>
      </tr>
    ))}
  </tbody>
</table>

        </div>

        
    </div>
  )
}

export default Tables