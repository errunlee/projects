import React, { useEffect } from 'react'
import { useContext,useRef } from 'react'
import {FaLink} from 'react-icons/fa'
import {HiBuildingOffice2} from 'react-icons/hi2'
import {HiLocationMarker} from 'react-icons/hi'
import { GithubContext } from '../context/Contexthead'
function Card({setHeight}) {
    const {githubUser}=useContext(GithubContext)
    const {company,name,blog,email,html_url,login,bio,avatar_url,location}=githubUser;
    const forheight=useRef(null)
    useEffect(()=>{
        const height=forheight.current.getBoundingClientRect().height;
        setHeight(height)
    })
  return (
    <div ref={forheight} className='p-3 position-relative'>
        <div className="position-absolute bg-white p-2 px-3 description">
            User
        </div>
        <div className="profile d-flex justify-content-between align-items-center">
            <div className="profile-wrapper d-flex align-items-center">
            <div className="avatar">
                <img style={{'height':'65px','width':'65px',borderRadius:'50%'}} src={avatar_url}></img>
            </div>
            <div className='d-flex flex-column align-items-center'>
            <h5 className="username mx-2 fw-bold">@{login}</h5>
            {name && <p >{name}</p>}
            </div>
           
            </div>
          <div className="follow-btn">
            <a href={html_url}><button className=' btn bg-none border-primary text-primary'>Follow</button></a>
          </div>
        </div>
        <div className="bio">
            <p className="my-1">{bio}</p>
        </div>
        <div className="details text-secondary">
             <div className="d-flex"><p><HiBuildingOffice2/></p><p className='mx-1'>{company}</p></div>
            <div className="d-flex"><p ><HiLocationMarker/></p> <p className='mx-1'>{location?location:'Earth'}</p></div>
            {blog && <div className='d-flex'><p className='mx-1'><FaLink color='#121212' /></p><a className='text-decoration-none' href={blog} >{blog}</a></div>}
        </div>
    
    </div>
  )
}

export default Card
