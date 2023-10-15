

import {Link, useNavigate} from 'react-router-dom'
import { useState,useRef,useContext } from 'react'
import { auth } from '../../firebase'
import {  createUserWithEmailAndPassword,updateProfile  } from "firebase/auth";
import { MovieContext } from '../../context';
import img from './load.gif'
export default function Signup(){
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [error,setError]=useState(false)
  const [errMsg,setErrMsg]=useState('')
  const {currentUser,setShowAlert,setMsg}=useContext(MovieContext)
  const navigate=useNavigate();
  const usernameRef=useRef();
  const [loading,setLoading]=useState(false)

  const submitForm=async (e)=>{
    e.preventDefault();
    setLoading(true)
    try{
        const user=await createUserWithEmailAndPassword(auth, email, password);
        if(user){
           await updateProfile(auth.currentUser, {
                displayName:usernameRef.current.value
              })
        }
        navigate('/');
        setMsg('Account created and logged in successfully')
        setShowAlert(true);
        setError(false)

      } catch (error) {
          setError(true)
          setErrMsg((error.message).slice(9))
      }
    setLoading(false)
    }

    if(currentUser){
        navigate('/')
    }
  return(
    <div className='d-flex justify-content-center flex-column align-items-center'>
    <h1>Signup</h1>
    <form onSubmit={submitForm} className='d-flex flex-column justify-content-center border p-3' style={{maxWidth:'500px'}}>
        <label>Username</label>
      <input className='p-2' required ref={usernameRef}/>
        <label htmlFor='email'>Email</label>
        <input required value={email} onChange={(e)=>{setEmail(e.target.value)}} className='p-2 ' type='text'></input>
        <label htmlFor='password'>Password</label>
        <input required autoComplete="current-password" value={password} onChange={(e)=>{setPassword(e.target.value)}} className='p-2' type='password'></input>
        { error && <p className='text-danger fw-bold'>{errMsg}</p>}

      <button type='submit' className='btn  btn-dark my-2'>{!loading?'Sign Up':<img src={img}/>}</button>
    </form>
    <p>Already have an account?<Link className='text-decoration-none text-primary' to='/login'> Login</Link></p>
      
    </div>
  )
}
