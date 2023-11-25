import React, { useEffect } from 'react'
import profileimg from "../assets/profile.png"
import { FaHome } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { logged } from '../slices/userSlices';
import { IoIosLogOut } from "react-icons/io";
import { LuMessageSquare } from "react-icons/lu";
const Sidebar = () => {
  const auth = getAuth();
  let navigate =useNavigate()
  let dispatch =useDispatch()
  

  let handleLogout =()=>{
    signOut(auth).then(() => {
      localStorage.removeItem("user")
      dispatch(logged(null))
      navigate("/login")
    }).catch((error) => {
      // An error happened.
    });
  }
  
  return (
    <div className='sidebar'>
      <div>
      <img src={profileimg} className='sidebarimg'/>
      </div>
      <div className='icons'>
       
        <Link to="/home" className={window.location.pathname == "/home" && "active"}>
         <FaHome className='icon'/><br/>
        </Link>

        <Link to="/home/msg" className={window.location.pathname == "/home/msg" && "active"}>
          <LuMessageSquare className='icon'/><br/>
        </Link>

        <Link to="/home/notification" className={window.location.pathname == "/home/notification" && "active"}>
         <IoIosNotifications className='icon'/><br/>
        </Link>

        <Link to="/home/settings" className={window.location.pathname == "/home/settings" && "active"}>
         <CiSettings className='icon'/> <br />
        </Link>

        <IoIosLogOut onClick={handleLogout} className='icon logout'/>
      </div>
    </div>
  )
}

export default Sidebar
