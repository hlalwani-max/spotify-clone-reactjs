import React from 'react'
import './songItem.css'

function SongItem({track="test"}) {
    return (
        <div className='song'>
            <img className='song_album_icon' src={track.album.images[0].url} alt=''/>
            <div className='song_info'>
                <h1>{track.name}</h1>
                <p>
                    {track.artists.map((artist) => artist.name).join(", ")} -{" "}
                    {track.album.name}
                </p>
            </div>
        </div>
    )
}

export default SongItem
