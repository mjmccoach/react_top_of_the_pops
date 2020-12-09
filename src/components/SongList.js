import SongListItem from './SongListItem.js'

const SongList = ({songs}) => {

    const SongListItems = songs.map( item => {
    return (

        <SongListItem
            key={item ["id"]["attributes"]["im:id"]}
            artist={item["im:artist"]["label"]}
            song={item["im:name"]["label"]}
            artwork={item["im:image"][1]["label"]}
            />
    
    )})

    return (
        <ul> {SongListItems} </ul> 
    )

}

export default SongList;