import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
import { MovieContext } from '../../context'
export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {currentUser,showAlert,setShowAlert,msg,setMsg}=useContext(MovieContext)
    const navigate=useNavigate();

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate('/')
            setMsg('Logged in Successfully ')
            setShowAlert(true);

        } catch (error) {
            console.log(error)
        }
    }

    if(currentUser){
        navigate('/')
    }

    return (
        <div className='d-flex justify-content-center flex-column align-items-center'>
            <h1>Login</h1>
            <form onSubmit={submitForm} className='d-flex flex-column justify-content-center border p-3' style={{ maxWidth: '500px' }}>
                <label htmlFor='email'>Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className='p-2' type='text'></input>
                <br></br>
                <label htmlFor='password'>Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} className='p-2' type='password' autoComplete="current-password"></input>
                <br></br>
                <button className='btn  btn-dark'>Log In</button>
            </form>
            <p>No Account?<Link className='text-decoration-none text-primary' to='/signup'> Sign Up</Link></p>

        </div>
    )
}