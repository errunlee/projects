import React from 'react'
import Search from './Search'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='navbar px-5 py-4' >
      <nav className='d-flex align-items-center justify-content-between w-100'>
        <Link className='text-decoration-none text-white' to='/'><h3 className='m-0'>LeeCinemas</h3></Link>
        <ul className='d-flex list-unstyled m-0'>

            <li>Action</li>
            <li>Adventure</li>
            <li>Animation</li>
            <li>Documentry</li>
            <li>Genre</li>
            <li>Top Imdb</li>
        </ul>
        <Search/>
      </nav>
    </div>
  )
}

export default Navbar