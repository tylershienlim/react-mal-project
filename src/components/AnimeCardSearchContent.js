import React from 'react'

function AnimeCardSearch({anime}){
  return (
    <article className='anime-card'>
        <a href={anime.url}
            target="_blank"
            rel="noreferrer">
            <figure>
                <img 
                    src={anime.images.jpg.image_url}
                    alt="Anime card"/>
            </figure>
        </a>
        <h3>{anime.title}</h3>
    </article>
  )
}
export default AnimeCardSearch;

