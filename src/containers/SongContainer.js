import {useState, useEffect} from 'react';
import SongList from '../components/SongList';

const SongContainer = () => {

    const [songs, setSongs] = useState([])
    

    const getSongs = () => {
        fetch(`https://itunes.apple.com/gb/rss/topsongs/limit=20/json`) //fetching data from
        .then(res => res.json())
        .then(data => setSongs(data.feed.entry))
        
    }

    console.log(songs)

    useEffect(() => {
        getSongs();
      },[])

 
      return (
        <>
        <h1>I'm the Song Container</h1>
        {<SongList songs={songs}/>}
        </>
    )

}

export default SongContainer;