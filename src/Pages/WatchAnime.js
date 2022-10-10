import React from 'react'
import AnimeSite from '../components/AnimeSite'
import zoroto from '../assets/sites/zoroto.png'
import NineAnime from '../assets/sites/9anime.png'
import CrunchyRoll from '../assets/sites/crunchyroll.png'
import AnimeBee from '../assets/sites/animebee.png'
import GoGoAnime from '../assets/sites/gogoanime.png'
import AnimeFreak from '../assets/sites/animefreak.png'
import Funimation from '../assets/sites/funimation.png'

function WatchAnime() {
  return (
    <main className='WatchAnime'>
        <h1>Watch Anime Here!</h1>
        <ul>
            <li>
              <a href='https://zoro.to/' target='_blank' rel="noreferrer">
                <AnimeSite SiteName={zoroto}/>
              </a>
            </li>
            <li>
              <a href='https://9anime.pl/' target='_blank' rel='noreferrer'>
                <AnimeSite SiteName={NineAnime}/>
              </a>
            </li>
            <li>
              <a href='https://www.crunchyroll.com/' target='_blank' rel='noreferrer'>
                <AnimeSite SiteName={CrunchyRoll}/>
              </a>
            </li>
            <li>
              <a href='https://animebee.to/' target='_blank' rel='noreferrer'>
                <AnimeSite SiteName={AnimeBee} />
              </a>
            </li>
            <li>
              <a href='https://gogoanime.mom/' target='_blank' rel='noreferrer'>
                <AnimeSite SiteName={GoGoAnime}/>
              </a>
            </li>
            <li>
              <a href='https://animefreak.ws/' target='_blank' rel='noreferrer'>
                <AnimeSite SiteName={AnimeFreak}/>
              </a>
            </li>
            <li>
              <a href='https://www.funimation.com/' target='_blank' rel='noreferrer'>
                <AnimeSite SiteName={Funimation}/>
              </a>
            </li>
        </ul>
    </main>
  )
}

export default WatchAnime;