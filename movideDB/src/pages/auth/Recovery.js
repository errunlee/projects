

import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../../firebase'
import { MovieContext } from '../../context'
import img from './load.gif' //this is loader image

export default function Login() {
    const [email, setEmail] = useState('')
  const [loading,setLoading]=useState(false)
    const {currentUser}=useContext(MovieContext)
    const navigate=useNavigate();
    const [error,setError]=useState(false)
    const [errMsg,setErrMsg]=useState('')
    const submitForm = async (e) => {
        e.preventDefault();
        setError(false)
        setLoading(true)
        try {
            await sendPasswordResetEmail(auth,email)
            alert("Passwrod reset email sent successfully")
            setError(false)
            navigate('/login')

        } catch (error) {
            setError(true)
            setErrMsg((error.message).slice(9))
            
        }
        setLoading(false)
    }

    if(currentUser){
        navigate('/')
    }
  document.title="Forgot Password | LeeCinemas"


    return (
        <div className='d-flex justify-content-center flex-column align-items-center'>
            <h1>Login</h1>
            <form onSubmit={submitForm} className='d-flex flex-column justify-content-center border p-3' style={{ width: '350px'}}>
                <label htmlFor='email'>Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className='p-2' type='text'></input>
                <br></br>
              { error && <p className='text-danger fw-bold'>{errMsg}</p>}
                <button className='btn  btn-dark'>{!loading?'Send reset Email':<img src={img}/>}</button>
            </form>
            <p>No Account?<Link className='text-decoration-none text-primary' to='/signup'> Sign Up</Link></p>

        </div>
    )
}