
import { MovieContext } from '../../context'
import Navbar from '../Navbar'
import './profile.css'
import React, { useContext, useEffect, useState } from 'react'
import { auth, upload } from '../../firebase'
import { updateEmail, updateProfile } from 'firebase/auth'
import { sendEmailVerification } from 'firebase/auth'
import Modal from '../Modal'
function Profile() {
    const { currentUser } = useContext(MovieContext)
    const [photo,setPhoto]=useState(null)
    const [email,setEmail]=useState(currentUser?.email)
    const [imageUrl,setImageUrl]=useState(currentUser?.photoURL)
    const [loading,setLoading]=useState(false)
    const [displayName,setDisplayName]=useState(currentUser?.displayName)
    const [sendingEmail,setSendingEmail]=useState(false)
    const handleChange= (e)=>{
        if(e.target.files[0]){
            setPhoto(e.target.files[0])
        }
        
    }
  
    const handleUpload=async ()=>{
        await upload(photo,currentUser,setLoading,setImageUrl)
        document.querySelector("#modal").close();
    }

    const openmodal=()=>{
        document.querySelector("#modal").showModal();
    }
    if (!currentUser) {
        return;
    }

  
   const handleEdit=async(param)=>{
    const value=prompt("enter the value for ")
    const payload={
        [param]:value
    }
    try{
        await updateProfile(currentUser,payload)
        setDisplayName(value)
        alert('updated ',param)
    }
    catch(err){
        alert('error changing name')
    }
   }

   const handleEditEmail=async ()=>{
    const newEmail=prompt("new email")
    await updateEmail(auth.currentUser,newEmail)
    setEmail(newEmail)
   }

//    send email verfication
const verifyEmail=async()=>{
    setSendingEmail(true)
    await sendEmailVerification(auth.currentUser)
    alert('Email sent Successfully')
    setSendingEmail(false)
}
    return (
        <>
            <Navbar />
            <div className='user-avatar d-flex flex-column justify-content-center align-items-center p-3 container'>
                <div className='avatar-img'>
                    <img src={imageUrl?imageUrl:'https://t4.ftcdn.net/jpg/03/31/69/91/360_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg'}></img>
                </div>
                <h1>Welcome, <span className='text-capitalize fw-bolder'>{displayName}</span> </h1>
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
                            <button className='btn btn-secondary p-2' onClick={openmodal}>Update</button>
                            </div> 
                            <Modal loading={loading}>
                            <div className='d-flex flex-column'>
                            <label className='fw-bold'>Choose a new photo to update Avatar</label>
                                <input
                                    type="file"
                                    id="profilePicture"
                                    accept="image/*"
                                    onChange={handleChange}/>

                            <button className='btn btn-primary btn-lg p-2' disabled={loading || !photo} onClick={handleUpload}>{loading?'Updating profile':"Update"}</button>
</div>
                            </Modal>
                        </div>
                        <hr className='m-0' />
                        <div className="row profile-row">
                            <div className="col-3">
                                Name
                            </div>
                            <div className="col-7 text-capitalize">
                                {displayName}
                            </div>
                            < div onClick={()=>{handleEdit('displayName')}} className="col-2 text-primary text-decoration-underline fw-bold">
                                Edit
                            </div>
                        </div>
                        <hr className='m-0' />
                        <div className="row profile-row ">
                            <div className="col-3">
                                UID
                            </div>
                            <div className="col-7">
                                {currentUser.uid}
                            </div>
                            < div className="col-2 text-warning  fw-bold">
                                UID can't be changed
                            </div>
                        </div>
                        <hr className='m-0' />

                        <div className="row profile-row ">
                            <div className="col-3">
                                Email
                            </div>
                            <div className="col-7">
                                {email}{currentUser.emailVerified?' (Verified)':<><span>(Not verified)</span><button onClick={verifyEmail}className='btn btn-sm p-1 btn-danger'>{sendingEmail?'Sending email':'Verify Now'}</button></>}
                            </div>
                            < div onClick={handleEditEmail} className="col-2 text-primary text-decoration-underline fw-bold">
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
