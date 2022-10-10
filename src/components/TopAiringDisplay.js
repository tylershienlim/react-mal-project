import React from 'react'
import AnimeCardTopAiring from './AnimeCardTopAiring';

function TopAiringDisplay({topAiring}) {
  return (
    <main className='Homebar'>
            <h1>Top Airing This Season</h1>
            <div className="anime-list">
                {topAiring.map(anime => (
                <AnimeCardTopAiring
                    anime={anime}
                    key={anime.mal_id} />
                ))}
            </div>
        </main>
  )
}

export default TopAiringDisplay;