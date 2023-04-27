import React from 'react'
import { GithubContext } from '../context/Contexthead'
import { useContext } from 'react'
import {GoRepo,GoGist} from 'react-icons/go'
import {FiUsers,FiUserPlus} from 'react-icons/fi'

function Info() {
    const {githubUser}=useContext(GithubContext);
    if(!githubUser) return;
    const {public_repos,followers,following,public_gists}=githubUser;
    const items=[
        {id:1,
        logo:GoRepo,
        label:'Repos',
        value:public_repos
        },
        {id:2,
        logo:FiUsers,
        label:'Followers',
        value:followers
        },
        {id:3,
        logo:FiUserPlus,
        label:'following',
        value:following
        },
        {id:4,
        logo:GoGist,
        label:'Gists',
        value:public_gists
        },
    ]
  return (
    <div className=' d-flex justify-content-between flex-wrap'>
        <div className=" main-box justify-content-between w-100">
        {items.map((user)=>{
            return(
                <div key={user.id} className='box mx-2  bg-white align-items-center  py-2 px-4 rounded'>
                <div className='logo ' >
                    <user.logo />
                </div>
                <div className='info d-flex flex-column'>
                    <h2 className='m-0  fw-bolder'>{user.value}</h2>
                    <p  className='text-secondary m-0'>{user.label}</p>
                </div>
             </div>
            )
        })}

     </div>
    </div>
  )
}

export default Info
