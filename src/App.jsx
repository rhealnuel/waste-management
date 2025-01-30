import Home from "./pages/Home"
import About from "./pages/About"
import SignIn from "./pages/SignIn"
import DropSite from "./pages/DropSite"
import Dashboard from "./pages/Dashboard"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Register from "./pages/Register"
import Footer from "./components/Footer"
import { useEffect, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Fo2oter from "./components/Fo2oter"
import HomePicks from "./components/HomePicks"


function App() {
  const [SignedIn, NotSignedIn] = useState(true)
  const [userlogged, setUserlogged] = useState('')

  useEffect(() => {

    setUserlogged(localStorage.getItem('email'));

  }, [localStorage.getItem('email')])

  return (
      <Router>
        <div className= " bg-[#71BC68] h-fit  pt-2 overflow-x-hidden ">
        <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Navbar userlogged ={userlogged} />
          
          <Routes>
              <Route path="/" element={<Home  />}/>
              <Route path="/signin" element={userlogged !== null ? <Home /> : <SignIn/> }/>
              <Route path="/dashboard" element={ userlogged !== null ? <Dashboard />: <SignIn/>}/>
              <Route path="/about" element={<About />}/>
              <Route path="/dropsite" element={ userlogged !== null ? <DropSite /> : <SignIn />}/>
              <Route path="/register" element={ userlogged !== null ? <Register />: <Home/>}/>
              <Route path="/homepicks" element={ userlogged !== null ? <HomePicks />: <Home/>}/>
          </Routes>
           
          <Footer/>
          
        </div>
      </Router>
      
  )
}

export default App
