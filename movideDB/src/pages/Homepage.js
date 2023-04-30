import React from 'react'
import Navbar from '../components/Navbar';
import Movies from '../components/Movies';
import Suggestions from '../components/Suggestions';
function Homepage() {
  return (
    <div>
      <Navbar/>
      <div className="container">
      <Suggestions/>
    <Movies/>
      </div>
     
    </div>
  )
}

export default Homepage
