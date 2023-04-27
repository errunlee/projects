import React from 'react'
import { Info, Navbar, Repos, Search, User, Loading } from '../components/Index.js'
import { useContext } from 'react'
import { GithubContext } from '../context/Contexthead.js'
function Dashboard() {
  const { loading,error } = useContext(GithubContext)
  return (
    <div>
      <div className='d-flex flex-column'>
        <Navbar />
        <div className="container">
        {error && <p className='m-0 text-danger lead'>No user found with that username.</p>}
        </div>

        <Search />
        {loading && <Loading />}
        {!loading && <>
          <div className="container">
            <Info></Info>
            <User></User>
          </div>
          <Repos></Repos>
        </>}

      </div>
    </div>
  )
}

export default Dashboard
