import {useState} from 'react';
import SongList from '../components/SongList';
import SongSelector from '../components/SongSelector';

const SongContainer = () => {

    const [song, setSong] = useState({})
    const [songId, setSongId] = useState(1)

    const getSong = () => {
        fetch(`https://itunes.apple.com/gb/rss/topsongs/limit=20/json`) //fetching data from
        .then(res => res.json())
        .then(data => setSong(data))
    }

    const incrementSongId = () => {
        if(setSongId < 20)
        {setSongId +1 }
    }

    const decrementSongId = () => {
        if(setSongId > 1)
        {setSongId - 1}
    }
    return (
        <>
        <h1>I'm the Song Container</h1>
        <SongList />
        <SongSelector />
        </>
    )
}

export default SongContainer;