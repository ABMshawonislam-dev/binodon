import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { getAuth, signInWithEmailAndPassword,sendEmailVerification  } from "firebase/auth";
import React, { useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import regimg from "../assets/regimg.png";
import waiting from "../assets/waiting.gif";

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



const Login = () => {
    const auth = getAuth();
    let navigate = useNavigate()
    let [regdata,setRegdata] = useState({
        email:"",
        password:""
    })
    let [loader,setLoader] = useState(false)

  

    let handleChange = (e)=>{
    
        setRegdata({...regdata,[e.target.name]:e.target.value})
    }

    let handleSubmit = ()=>{
        setLoader(true)
        signInWithEmailAndPassword(auth, regdata.email, regdata.password).then((userCredential) => {
            console.log(userCredential)
            if(userCredential.user.emailVerified){
                setRegdata({
                    email:"",
                    password:""
                })
                navigate("/home")
                setLoader(false)
            }else{
               
                toast("Please varify your email")
                setLoader(false)
            }
           
          })
          .catch((error) => {
            const errorCode = error.code;
            console.log(errorCode)
            setLoader(false)
            if(errorCode.includes("login")){
                toast("Ki hack korte chaw,Sajib er biya")

            }
           
          });

        // if(regdata.email == ""){
        //     toast.error("Please give an email")
         
        // }else{
        //     let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        //     console.log(pattern.test(regdata.email))
        //     if(!pattern.test(regdata.email)){
        //         toast.error("Please give an valid email")
        //     }
        // }
        // if(regdata.fullname == ""){
        //     toast.error("Please give an fullname")
           
        // }
        // if(regdata.password == ""){
        //     toast.error("Please give an password")
           
        // }
        // else{
        //     let lowercase = /(?=.*[a-z])/
        //     let capital = /(?=.*[A-Z])/
        //     let number = /(?=.*[0-9])/
        //     let symbol = /(?=.*[!@#$%^&*])/
        //     let length = /(?=.{8,})/
        //     if(!lowercase.test(regdata.password)){
        //         toast.error("Please add lowercase")
        //     }
        //     if(!capital.test(regdata.password)){
        //         toast.error("Please add capital")
        //     }
        //     if(!number.test(regdata.password)){
        //         toast.error("Please add number")
        //     }
        //     if(!symbol.test(regdata.password)){
        //         toast.error("Please add symbol")
        //     }
        //     if(!length.test(regdata.password)){
        //         toast.error("Password must be minimum 8character")
        //     }
        // }


    }
  return (
    <Grid container >
        {/* <button onClick={notify}>Notify!</button> */}
        {loader
        ?
        <img style={{width:"100%",height:"100vh"}} src={waiting}/>
        :
        <>
            <Grid item xs={6}>
      <div className='regbox'>
        <h1>Get started with easily register</h1>
        <p>Free register and you can enjoy it</p>
        
        <div>
        <MyInput onChange={handleChange} name='email' id="outlined-basic" label="Email Address" variant="outlined" value={regdata.email}/>
       
        </div>
       
        <div>
        <MyInput type='password' onChange={handleChange} name='password' id="outlined-basic" label="Password" variant="outlined" value={regdata.password}/>
        </div>
        {loader
        ?
        <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
        />
        :    
        <MyButton onClick={handleSubmit} variant="contained">Sign Up</MyButton>
    }
      </div>
    </Grid>
    <Grid item xs={6}>
      <img  className='regimg' src={regimg}/>
    </Grid>
        </>
        }
    
  
    
  </Grid>
  )
}

export default Login