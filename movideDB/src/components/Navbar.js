import React,{useState} from 'react'
import Search from './Search'
import { NavLink, Link } from 'react-router-dom'
import ManageUser from './manageUser/ManageUser'
import './responsivenav.css'

function Navbar() {

    const handleHover=()=>{
      document.querySelectorAll('.links')[0].classList.add('showNav')
    }
    const handleLeave=()=>{
      document.querySelectorAll('.links')[0].classList.remove('showNav')
    }
  return (
    <div className='navbar sticky-top px-lg-5 px-3 py-2' >
      <nav className='d-flex align-items-center justify-content-between w-100'>

        <ul className='d-flex list-unstyled m-0 my-2 my-lg-0 align-items-center'>
          <div className="logo me-lg-5 me-2">
            <Link className='text-decoration-none text-white' to='/'><h1 className='m-0 lead fw-bolder'><span className='text-info'>Lee</span>Cinemas</h1></Link>
          </div>

          <div className='position-relative ' onMouseLeave={handleLeave}>
            <button onMouseOver={handleHover} className='btn bg-none text-white browse-btn d-lg-none d-flex browse'>Browse</button>

           <div className='links  '>
              <NavLink to='/' activeClassName="active" className='text-decoration-none text-light mx-2' >Home</NavLink>
              <NavLink to='/category/28' activeClassName="active" className='text-decoration-none text-light mx-2' >Action</NavLink>
              <NavLink to='/category/12' activeClassName="active" className='text-decoration-none text-light mx-2' >Adventure</NavLink>
              <NavLink to='/category/16' activeClassName="active" className='text-decoration-none text-light mx-2' >Animation</NavLink>
              <NavLink to='/category/80' activeClassName="active" className='text-decoration-none text-light mx-2' >Crime</NavLink>
              <NavLink to='/category/10751' activeClassName="active" className='text-decoration-none text-light mx-2' >Family</NavLink>
              <NavLink to='/category/99' activeClassName="active" className='text-decoration-none text-light mx-2' >Documentry</NavLink>
            </div>

          </div>

        </ul>
        <div className='d-flex align-items-center '>
          <Search />
          <ManageUser />
        </div>

      </nav>
    </div>
  )
}

export default Navbar
