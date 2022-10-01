import React from 'react'
import Header from '../header/Header'
import About from '../about/About'
import Advertisement from '../advertisement/Advertisement'
function Home() {
  return (
    <div className='home_container'>
      <Header/>
      <About/>
      <Advertisement/>
    </div>
  )
}

export default Home