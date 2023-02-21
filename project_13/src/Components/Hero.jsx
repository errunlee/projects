import React from 'react'
import Phone from './images/phone.svg'
function Hero() {
  return (
    <div className='hero-container row justify-content-between my-3  position-relative'>
        <div className="left col-7 my-5">
        <h1>Payments infrastructure
for the internet</h1>
    <p className='my-3'>Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.</p>
    <button className="btn btn-dark">Start here</button>

        </div>
      <div className="right col-3">
        <img src={Phone}/>
      </div>
    </div>
  )
}

export default Hero
