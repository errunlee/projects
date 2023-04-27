import React from 'react'
import { useContext } from 'react'
import { GithubContext } from '../context/Contexthead'
function Followers({height}) {
    const {followers}=useContext(GithubContext)
    if(!followers) return;
  return (
       <div className=' position-relative'>
            <div className='position-absolute bg-white p-2 px-3 description'>Followers</div>
        <div className='followers-box' style={{maxHeight:height}} >
            {followers.map((follower)=>{
             const {avatar_url,login,html_url}=follower;
                return(
                    <div key={html_url} className="profile-wrapper d-flex my-2">
                    <div className="avatar">
                        <img style={{'height':'65px','width':'65px',borderRadius:'50%'}} src={avatar_url}></img>
                    </div>
                    <div className='mx-3'> <h6 className="username fw-bold m-0">{login}</h6>
                    <p className="text-secondary m-0">{html_url}</p></div>
                   
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Followers
