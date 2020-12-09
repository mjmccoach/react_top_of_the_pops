const SongListItem = ({ artist, song, artwork}) => {
    return (
        <li>
            <img src={artwork} alt="artwork"/>
            <p> {song} </p>
            <p> {artist} </p>
            <br/>
        </li>
    )

}

export default SongListItem;