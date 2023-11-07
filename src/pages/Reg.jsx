import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import regimg from "../assets/regimg.png"
import { alpha, styled } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import {  toast } from 'react-toastify';


const MyInput = styled(TextField) ({
      width: '90%',
      marginBottom: '20px'
  });

  const MyButton = styled(Button)({
    backgroundColor: '#5F35F5',
    width: "90%",
    padding: "20px 0",
    borderRadius: "86px"
  });


const Reg = () => {

    let [regdata,setRegdata] = useState({
        email:"",
        fullname:"",
        password:""
    })

  

    let handleChange = (e)=>{
    
        setRegdata({...regdata,[e.target.name]:e.target.value})
    }

    let handleSubmit = ()=>{
        if(regdata.email == ""){
            toast.error("Please give an email")
         
        }else{
            let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            console.log(pattern.test(regdata.email))
            if(!pattern.test(regdata.email)){
                toast.error("Please give an valid email")
            }
        }
        if(regdata.fullname == ""){
            toast.error("Please give an fullname")
           
        }
        if(regdata.password == ""){
            toast.error("Please give an password")
           
        }else{
            let lowercase = /(?=.*[a-z])/
            let capital = /(?=.*[A-Z])/
            let number = /(?=.*[0-9])/
            let symbol = /(?=.*[!@#$%^&*])/
            let length = /(?=.{8,})/
            if(!lowercase.test(regdata.password)){
                toast.error("Please add lowercase")
            }
            if(!capital.test(regdata.password)){
                toast.error("Please add capital")
            }
            if(!number.test(regdata.password)){
                toast.error("Please add number")
            }
            if(!symbol.test(regdata.password)){
                toast.error("Please add symbol")
            }
            if(!length.test(regdata.password)){
                toast.error("Password must be minimum 8character")
            }
        }


    }

    


  return (
      <Grid container >
        {/* <button onClick={notify}>Notify!</button> */}
     
    <Grid item xs={6}>
      <div className='regbox'>
        <h1>Get started with easily register</h1>
        <p>Free register and you can enjoy it</p>

        <div>
        <MyInput onChange={handleChange} name='email' id="outlined-basic" label="Email Address" variant="outlined" />
       
        </div>
        <div>
        <MyInput onChange={handleChange}  name='fullname' id="outlined-basic" label="Fullname" variant="outlined" />
        </div>
        <div>
        <MyInput type='password' onChange={handleChange} name='password' id="outlined-basic" label="Password" variant="outlined" />
        </div>
        <MyButton onClick={handleSubmit} variant="contained">Sign Up</MyButton>
      </div>
    </Grid>
    <Grid item xs={6}>
      <img className='regimg' src={regimg}/>
    </Grid>
  
    
  </Grid>
  )
}

export default Reg