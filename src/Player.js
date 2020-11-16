import React from 'react'
import "./Player.css"
import Body from './Body'
import SideBar from './Sidebar'
import Footer from './Footer'

function Player() {
    return (
        <div className='player'>

            <div className='player_body'>
                <SideBar/>
                <Body/>
            </div>

            <div className='player_footer'>
                <Footer/>
            </div>

        </div>

    )
}

export default Player
