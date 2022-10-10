import React, {useState} from 'react';
import AnimeCardSearch from '../components/AnimeCardSearchContent'

function SearchContent() {
  const [animeList, SetAnimeList] = useState([]);
  const [search, SetSearch] = useState("");

  const HandleSearch = e => {
    e.preventDefault();

    FetchAnime(search);
  }

  const FetchAnime = async (query) => {
    try{
    const temp = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&limit=10`)
      .then(res => res.json());
      SetAnimeList(temp.data);
      console.log("Search Anime")
      console.log(temp.data)
    }
    catch(error){}
  }

  return (
    <main>
        <div className='main-head'>
            <form 
                className='search-box'
                onSubmit={HandleSearch}>
                <input
                    type='search'
                    placeholder='Search for anime..'
                    required
                    value={search}
                    onChange={e => SetSearch(e.target.value)}
                    />
            </form>
        </div>
        <div className='content-wrap'>
          <div className="anime-list">
            {animeList.map(anime => (
              <AnimeCardSearch
                  anime={anime}
                  key={anime.mal_id} />
              ))}
          </div>
        </div>
    </main>
  )
}

export default SearchContent;