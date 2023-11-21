import React from 'react'
import profileimg from "../assets/profile.png"
import { FaHome } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div>
      <img src={profileimg} className='sidebarimg'/>
      </div>
      <div className='icons'>
        <Link to="/page/home">
        <FaHome className='icon '/><br/>
        
        </Link>
        <Link to="/page/msg" className='active'>
        
        <FaMessage className='icon'/><br/>
        
        </Link>
        <IoIosNotifications className='icon'/><br/>
        <CiSettings className='icon'/>
      </div>
    </div>
  )
}

export default Sidebar
