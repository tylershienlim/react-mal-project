import React, {useState, useEffect} from 'react';
import TopAiringDisplay from '../components/TopAiringDisplay';

function TopAiring() {
  const [topAiring, SetTopAiring] = useState([]);

  const GetAnimeAPI = async () => {
    try{
    const temp = await fetch(`https://api.jikan.moe/v4/top/anime?q=tv&filter=airing&limit=10`)
    .then(res => res.json());
    SetTopAiring(temp.data);
    console.log(temp.data)

    }
    catch(error){}
  }

  useEffect(() => {
    GetAnimeAPI();
  }, [])

    return (
        <div className="App">
            <div className='content-wrap'>
                <TopAiringDisplay
                topAiring={topAiring}
                />
            </div>
        </div>
    )
}

export default TopAiring;