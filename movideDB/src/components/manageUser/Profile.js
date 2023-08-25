
import { MovieContext } from '../../context'
import Navbar from '../Navbar'
import './profile.css'
import React, { useContext, useEffect, useState } from 'react'
import { upload } from '../../firebase'
function Profile() {
    const { currentUser } = useContext(MovieContext)
    const [photo,setPhoto]=useState(null)
    const [imageUrl,setImageUrl]=useState(currentUser?.photoURL)
    const [loading,setLoading]=useState(false)
    if (!currentUser) {
        return;
    }


    const handleChange=(e)=>{
        if(e.target.files[0]){
            setPhoto(e.target.files[0])
        }
    }
    const handleSubmit=()=>{
        upload(photo,currentUser,setLoading,setImageUrl)
    }
    console.log(currentUser)

   
    return (
        <>
            <Navbar />
            <div className='user-avatar d-flex flex-column justify-content-center align-items-center p-3 container'>
                <div className='avatar-img'>
                    <img src={imageUrl?imageUrl:'https://t4.ftcdn.net/jpg/03/31/69/91/360_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg'}></img>
                </div>
                <h1>Welcome, Arun Khatri!</h1>
                <h5 className="text-secondary">Manage your account details here.</h5>
                <div className="personal-info d-flex flex-column justify-content-center align-items-center mt-3 ">
                    <h1>Personal Info</h1>
                    <h3 className='text-justify w-50'>Your profile info in Lee Cinemas</h3>
                    <p className='w-50 text-justify text-faded'>Personal info and options to manage it. You can make some of this info, like your contact details, visible to others so they can reach you easily. You can also see a summary of your profiles.</p>
                    <div className="d-grid border p-3 rounded">
                        <div className="row profile-row">
                            <div className="col-3 ">
                                Profile Picture
                            </div>
                            <div className="col-7 text-faded">
                                A picture helps people recognize you and lets you know when you’re signed in to your account
                            </div>
                            < div className="col-2 text-primary text-decoration-underline fw-bold">
                                <input type='file' onChange={handleChange}/>
                                <button onClick={handleSubmit} disabled={loading || !photo}>Update</button>
                            </div> 
                        </div>
                        <hr className='m-0' />
                        <div className="row profile-row">
                            <div className="col-3">
                                Name
                            </div>
                            <div className="col-7">
                                {currentUser.displayName}
                            </div>
                            < div className="col-2 text-primary text-decoration-underline fw-bold">
                                Edit
                            </div>
                        </div>
                        <hr className='m-0' />
                        <div className="row profile-row ">
                            <div className="col-3">
                                Username
                            </div>
                            <div className="col-7">
                                {currentUser.username}
                            </div>
                            < div className="col-2 text-primary text-decoration-underline fw-bold">
                                Edit
                            </div>
                        </div>
                        <hr className='m-0' />

                        <div className="row profile-row ">
                            <div className="col-3">
                                Email
                            </div>
                            <div className="col-7">
                                {currentUser.email}
                            </div>
                            < div className="col-2 text-primary text-decoration-underline fw-bold">
                                Edit
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
