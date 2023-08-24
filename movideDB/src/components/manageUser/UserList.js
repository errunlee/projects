

import React ,{useContext, useEffect, useState} from 'react'
import { MovieContext } from '../../context';

import { collection ,onSnapshot} from 'firebase/firestore';
import { db } from '../../firebase';
import { Link } from 'react-router-dom'
import {AiFillPlayCircle} from 'react-icons/ai'
const UserList = () => {
  const {currentUser,userList,setUserList}=useContext(MovieContext)

  useEffect(()=>{
    if(!currentUser){
      return;
    }
    const colref=collection(db,currentUser.uid)
    const unsubscribe = onSnapshot(colref, (querySnapshot) => {
      const datas = [];
      querySnapshot.forEach((doc) => {
          datas.push(doc.data())
      });
      setUserList(datas)
      console.log(userList)
    });

    return (()=>{unsubscribe()})
  },[])
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }


  if(!currentUser){
    return;
  }
  return (
    <div className='row'>
      {
        userList.length>0 &&
        userList.map((item)=>{
          const {poster_path,id}=item;
          const imageUrl=poster_path?`https://image.tmdb.org/t/p/w200${poster_path}`:'https://picsum.photos/200/300'
      
          return(
          <Link onClick={handleClick} className='view-link text-decoration-none col-md-3 col-lg-2 col-6' to={`/${id}`}> <div className='singleMovie shadow m-2 rounded d-flex align-items-end  position-relative ' style={{backgroundImage:`url(${imageUrl})`}}>
      <div className="title p-2 w-100">
      <p className='text-center text-shadow-lg m-0 '>{item.original_title}</p>
      </div>
      <div className='position-absolute overlay'/>
      <div className="playbtn position-absolute"><AiFillPlayCircle style={{ height: 55, width: 55,color:'purple' }} /></div>
     
    </div></Link>)
        })
      }
    </div>
  )
}

export default UserList
