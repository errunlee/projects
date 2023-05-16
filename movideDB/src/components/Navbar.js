import React from 'react'
import Search from './Search'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='navbar px-5 py-4' >
      <nav className='d-flex align-items-center justify-content-between w-100'>
        <Link className='text-decoration-none text-white' to='/'><h3 className='m-0'>LeeCinemas</h3></Link>
        <ul className='d-flex list-unstyled m-0'>

            <Link to='/category/28' className='text-decoration-none text-light' >Action</Link>
            <li>Adventure</li>
            <Link to='/category/16'>Animation</Link>
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
