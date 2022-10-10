import React from 'react'

function AnimeSite({SiteName}) {
  return (
    <div className='AnimeSiteCard'>
        <div className='Anime'>
          <figure>
              <img src={SiteName} alt="anime site"/>
          </figure>
        </div>
    </div>
  )
}

export default AnimeSite;