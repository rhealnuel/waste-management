import { useState } from "react";
import { Link } from "react-router-dom";
import Square from "../components/Square";
import Squaretwo from "../components/Squaretwo";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'; // Importing eye icons
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
 const [isSignUp, setIsSignUp] = useState(false) 
 const [showPassword, setShowPassword] = useState(false); 
//  const [Confirm, setConfirm] = useState("")
const navigate = useNavigate()
 const [err, setErr] = useState("")

const [data, setData] = useState(
    {
        email: "",
        name: "",
        password: "",
        date: "",
        phone: ["", ""],
    }
)

const [loginData, setLoginData] =useState(
    {
        email: "",
        password: ""
    }
)

const sendData = isSignUp ? data : loginData

const url = `http://localhost:8989/${isSignUp ? "register" : "login"}`

// const signupurl = `http://localhost:8989/register`


const handleSubmit = async (e) => {
    e.preventDefault();
    
    if(sendData.email === "" || isSignUp && sendData.name === "" ||  sendData.password === "" || isSignUp && sendData.phone === "" || isSignUp && sendData.date === ""){
        
        toast.error("please fill the required filled")
        localStorage.setItem('email', data )

        
    } else {


        try {
            const response = await axios.post(url, sendData);
            // console.log(response.data.message);  // This should work if the request is successful
            response.data.message === "successfully logged in" || response.data.message ==="User created successfully" ?
            toast.success(response.data.message) : toast.error(response.data.message)

            if(response.data.message === "successfully logged in") {
                localStorage.setItem('email', sendData.email);
                navigate("/dropsite")
                window.location.reload();
            }

        } catch (error) {
            if (error.response) {
                // Server responded with a status other than 2xx
                console.log("Error message:", error.response.data.message);  // This should log 'email already exists'
                toast.error(error.response.data.message)
            } else if (error.request) {
                // Request was made but no response received
                console.log("No response received:", error.request);
            } else {
                // Something else happened while setting up the request
                console.log("Error setting up request:", error.message);
            }
        }
    }

};




const handleChange = (e) => {
    const { name, value } = e.target;

    if(isSignUp) {

        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

    } else {
        setLoginData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }
};
//console.log(data)
const compare = (e) => {
    if(data.password !== e.target.value) {
        setErr("Password does not match")
    } else {
        setErr("")
    }
}
    return ( 
        <div className="flex items-center justify-center  w-[100%] py-32  relative overflow-hidden">

            <div>
                <div className="absolute left-[-350px] top-[-400px] rotate-45 lg:flex hidden "> 
                    <Square />
                </div>
                 
                 <div className="absolute right-[-570px] bottom-[-400px] rotate-45  lg:flex hidden " >
                    <Squaretwo/>
                 </div>



            </div>
            <div className="bg-[#F6FBF9] p-10 border-none rounded-[20px] lg:w-[30%] h-fit">

            <h1 className="mb-8 text-center">{isSignUp ? "Create An Account" : "Glad to see you again!"} </h1>

            <form className="grid grid-col">
                {
                    isSignUp &&
                <input value={data.name} onChange={handleChange} type="text" name="name"  placeholder="Name" className="mb-8 border-[1px] rounded-[7px] p-1"/> 
                }

                {
                 isSignUp &&

                <input type="#" name="PhoneNum" placeholder="Phone Number" className="mb-8 border-[1px] rounded-[7px] p-1"/> 
                }

                {
                    isSignUp &&

                <input type="#" placeholder="Phone Number (Optional)" className="mb-8 border-[1px] rounded-[7px] p-1"/> 
                }

                {
                    isSignUp &&

                <input value={data.date} onChange={handleChange} type="Date" name="date"  placeholder="Date of Birth" className="mb-8 border-[1px] rounded-[7px] p-1"/>  
                }
                <input value={isSignUp ? data.email : loginData.email } onChange={handleChange} type="email" name="email" placeholder="Email Address@gmail.com" className="mb-8 border-[1px] rounded-[7px] p-1"/> 
                <input
                        value={isSignUp ? data.password : loginData.password}
                        onChange={handleChange}
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        className="border-[1px] rounded-[7px] p-1 w-full"/>
            
            <span onClick={() => setShowPassword(!showPassword)} className="relative top-[-27px] left-64 inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer" >
              {showPassword ?  <AiFillEye size={20} />  :  <AiFillEyeInvisible size={20}/>}
            </span>
            
            
            
                
                {
                    isSignUp &&
                
                <input onChange={compare} type="Password"  placeholder="Confirm Password" className="mb-8 border-[#d6d5d5] border-[1px] rounded-[7px] p-1 "/>
                }
                <p className="text-red-500 italic">{err}</p>

                <div className="flex items-center justify-center mb-5"><button onClick={ handleSubmit } className="bg-[#E3F2E1] lg:text-[22px] w-full font-[700] text-[#71BC68] p-4 rounded-2xl lg:w-48 h-12 flex items-center justify-center hover:bg-green-500 hover:text-white  ">{isSignUp ? "Sign Up" : "Sign In"}</button> </div>

                <div className="flex items-center justify-center"><h2>{isSignUp ? "Already have an account?": " Don't Have An Account?"} <span className=" cursor-pointer hover:underline text-[#71BC68] " onClick={() => setIsSignUp(!isSignUp)}>{isSignUp ? "Sign In" : "Sign Up"}</span></h2> </div>
                
            </form>

    

            </div>



        </div>
     );
}
 
export default SignIn;