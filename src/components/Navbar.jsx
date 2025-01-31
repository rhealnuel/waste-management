import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { MdOutlineClose } from "react-icons/md";
import imgOne from "../assets/tgtechLogo.jpg";
import { useState } from "react";



const Navbar = (props) => {
    const [open, setOpen] = useState(false)

    const handleLogout = () => {
        localStorage.removeItem("email")
        window.location.reload();
    }

    return ( 
        <div className="fixed w-full" >

        <div className="bg-[#E3F2E1]  flex justify-between items-center h-[70px]  lg:px-10 px-6  mx-2 py-2 rounded-2xl">
            <div className="logo text-[#71BC68] font-semibold text-md md:text-lg lg:text-2xl ">
                <img src={imgOne} alt="image" className="w-[55px] full p-2" />
            </div>
            <div className="links text-[#71BC68] hidden lg:flex items-center">
                <Link to="/" className="mr-8 font-semibold" >Home</Link>
               
               {props.userlogged !== null && (
                <Link to="/dropsite" className="mr-8 font-semibold">Locate</Link>               )
               }
               {props.userlogged !== null && (
                <Link to="/dashboard" className="mr-8 font-semibold" > Dashboard</Link>
               )
            }
               {/* <Link to="/dropsite" className="mr-8 font-semibold">Locate</Link>
                <Link to="/dashboard" className="mr-8 font-semibold" > Dashboard</Link> */}
                <Link to="/about" className="mr-8 font-semibold">About Us</Link>
                {
                    props.userlogged !== null ?
                    <button
                    onClick={handleLogout}
                    className=" mr-8 font-semibold border-[1px] rounded-[50px] border-[#71BC68] px-6 py-2">Log Out</button>
                    :
                    <Link to="/signin" >
                    <button className=" mr-8 font-semibold border-[1px] rounded-[50px] border-[#71BC68] px-6 py-2">Sign In</button>
                </Link>
                }
               
                {
                    props.userlogged !== null && (
                     <Link to="/register" ><button className="mr-8 font-semibold border-[1px] bg-[#71BC68] px-6 py-2 rounded-full text-[#E3F2E1]">Pick-Up Request</button></Link>

                    )
                }
            </div>

            <div className=" flex lg:hidden cursor-pointer font-semibold text-[30px] text-[#71BC68]" onClick={() => setOpen(!open)}>

                {open ? <MdOutlineClose/>: <CiMenuFries  />}
                  
            </div>
        </div>
            {open && (
                <div className=" ">
                    <div className=" pb-4 rounded-b-2xl flex flex-col mx-2 mt-[-10px] bg-[#E3F2E1] text-[#71BC68] items-center gap-6 lg:hidden ">
                        <Link to="/" className="py-2 font-semibold w-[90%] rounded-2xl text-center hover:text-[#E3F2E1] hover:bg-[#71BC68]" onClick={() => setOpen(false)}>Home</Link>
                        <Link to="/dropsite" className="py-2 font-semibold w-[90%] rounded-2xl text-center hover:text-[#E3F2E1] hover:bg-[#71BC68]" onClick={() => setOpen(false)}>Locate</Link>
                        <Link to="/dashboard" className="py-2 font-semibold w-[90%] rounded-2xl text-center hover:text-[#E3F2E1] hover:bg-[#71BC68]" onClick={() => setOpen(false)}> </Link>
                        <Link to="/about" className="py-2 font-semibold w-[90%] rounded-2xl text-center hover:text-[#E3F2E1] hover:bg-[#71BC68]" onClick={() => setOpen(false)}>About Us</Link>
                        <div className="grid grid-cols-2 gap-2 px-6 items-center w-full">
                            <Link to="/signin"  onClick={() => setOpen(false)} className=" w-full">
                                <button className="font-semibold border-[1px] border-[#71BC68] rounded-[50px] w-full  px-6 py-2">Sign In</button>
                            </Link>
                            <Link to="/register" className="py-2 w-full" onClick={() => setOpen(false)}>
                                <button className="font-semibold border-[1px] bg-[#71BC68] px-6 py-2 rounded-full w-full text-[#E3F2E1]">Register</button>
                            </Link>

                        </div>
                    </div>

                </div>
            )}
        </div>
     );
}

export default Navbar;