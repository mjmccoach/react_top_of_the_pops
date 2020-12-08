import {useState} from 'react';
import SongList from '../components/SongList';
import SongSelector from '../components/SongSelector';

const SongContainer = () => {

    const [song, setSong] = useState(1)

    const getSong = () => {
        fetch(`https://itunes.apple.com/gb/rss/topsongs/limit=20/json`)
        .then(res => res.json())
        .then(data => setSong(data))
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