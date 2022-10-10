import React from 'react'
import pika from '../assets/gifs/pika.gif'

function Home() {
  return (
    <main className='HomePage'>
        <div className='gif-container'>
          <img src={pika} alt="pika wave"/>
        </div>
        <h1 className='gif-captions'>Welcome to Tyler's MAL2.0 React App!</h1>
    </main>
  )
}

export default Home;