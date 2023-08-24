
import React, { useContext, useState, useEffect } from 'react'
import { doc, serverTimestamp, setDoc, deleteDoc, onSnapshot, collection } from 'firebase/firestore'
import { db } from '../../firebase';
import '../../pages/MovieDetail.css'
import { MovieContext } from '../../context';
export default function Addtofav({ id, original_title, poster_path, currentUser }) {
  const { userList, setUserList } = useContext(MovieContext)
  const [inFavorite, setInFavorite] = useState(false)

  const [text, setText] = useState('')

  useEffect(() => {
    if (!currentUser) {
      return;
    }

    const colref = collection(db, currentUser.uid)
    const unsubscribe = onSnapshot(colref, (querySnapshot) => {
      const datas = [];
      let userListIds = []
      querySnapshot.forEach((doc) => {
        datas.push(doc.data())
      });
      setUserList(datas)
      userListIds = datas.map((item) => {
        return item.id
      })
      const isInFav = userListIds.includes(id)
      setInFavorite(isInFav);
    });
    return (() => { unsubscribe() })
  }, [])

  useEffect(() => {
    setText(!inFavorite ? 'Add to favorite' : 'Remove from favorite')
  }, [inFavorite])

  const handleAdd = () => {
    if (!currentUser) {
      return;
    }
    const colref = doc(db, currentUser.uid, id)
    const payload = {
      id,
      original_title,
      poster_path,
      createdAt: serverTimestamp()
    }
    try {
      setText('Adding to favorite')
      setDoc(colref, payload)
      setText('Remove from favorite')
    }
    catch {
      console.log('err adding')
    }
  }
  const handleRemove = () => {
    if (!currentUser) {
      return;
    }
    const colref = doc(db, currentUser.uid, id)
    try {
      setText('Removing from favorite')
      deleteDoc(colref)
      setText('Add to favorite')
    }
    catch {
      console.log('err removing')
    }
  }

  return (
    <div onClick={!inFavorite ? handleAdd : handleRemove} className='rounded-circle  d-flex '>
      <p className='mx-2 favtext'>{text}</p>
      <div
        onMouseOver={() => {
          document.querySelector('.favtext').classList.add('show')
        }}
        onMouseLeave={() => {
          document.querySelector('.favtext').classList.remove('show')
        }}
      ><svg
        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={inFavorite?"#FFD700":"currentColor"} class="bi bi-bookmarks" viewBox="0 0 16 16">
          <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z" />
          <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z" />
        </svg></div>
    </div>
  )
}
