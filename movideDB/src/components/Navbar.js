import React from 'react'
import Search from './Search'
import { NavLink,Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='navbar sticky-top px-5 py-4' >
      <nav className='d-flex align-items-center justify-content-between w-100'>
        <Link className='text-decoration-none text-white' to='/'><h3 className='m-0'>LeeCinemas</h3></Link>
        <ul className='d-flex list-unstyled m-0'>

            <NavLink to='/category/28'activeClassName="active" className='text-decoration-none text-light mx-2' >Action</NavLink>
            <NavLink to='/category/12'activeClassName="active" className='text-decoration-none text-light mx-2' >Adventure</NavLink>
            <NavLink to='/category/16'activeClassName="active" className='text-decoration-none text-light mx-2' >Animation</NavLink>
            <NavLink to='/category/80'activeClassName="active" className='text-decoration-none text-light mx-2' >Crime</NavLink>
            <NavLink to='/category/10751'activeClassName="active" className='text-decoration-none text-light mx-2' >Family</NavLink>
            <NavLink to='/category/99'activeClassName="active" className='text-decoration-none text-light mx-2' >Documentry</NavLink>
        </ul>
        <Search/>
      </nav>
    </div>
  )
}

export default Navbar
