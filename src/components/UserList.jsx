import React, { useEffect, useState } from 'react'
import profileimg from "../assets/profile.png"
import Button from '@mui/material/Button';
import { getDatabase, ref, onValue } from "firebase/database";
import TextField from '@mui/material/TextField';
import { useSelector } from 'react-redux';

const UserList = () => {
   const db = getDatabase();

   let [UserList,setUserList] = useState([])
   let [searchUserList,setSearchUserList] = useState([])
   let userInfo = useSelector((state)=>state.activeUser.value)
   useEffect(()=>{
      const userRef = ref(db, 'users');
      onValue(userRef, (snapshot) => {
         let arr = []
         snapshot.forEach(item=>{
            console.log(item.key,userInfo.uid)
            if(item.key != userInfo.uid){

               arr.push(item.val())
            }
           
            
         })
         setUserList(arr)
      });
   },[])

   let handlesearch = (e)=>{
    let user = UserList.filter(item=>item.username.toLowerCase().includes(e.target.value.toLowerCase()))
      console.log(user)
      setSearchUserList(user)
   }

  return (
    <div className='box'>
    <h2> User List</h2>
    <TextField onChange={handlesearch} id="outlined-basic" label="Search User" variant="outlined" />
    {searchUserList.length > 0
    ?
    searchUserList.map(item=>(
      <div className='list'>
       <img src={profileimg}/>
       <h3>{item.username}</h3>
       <Button variant="contained">Join</Button>
    </div>
   ))
    :
    UserList.map(item=>(
      <div className='list'>
       <img src={item.profile_picture}/>
       <h3>{item.username}</h3>
       <Button variant="contained">+</Button>
    </div>
   ))
    }
   {/* {UserList.map(item=>(
      <div className='list'>
       <img src={profileimg}/>
       <h3>{item.username}</h3>
       <Button variant="contained">Join</Button>
    </div>
   ))} */}

    
    
   </div>
  )
}

export default UserList
