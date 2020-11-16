// import logo from './logo.svg';
import './App.css';
import Login from './Login';
import React, {useEffect, useState} from 'react';
import { getAccessTokenFromUrl } from './Spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player'
import {useDataLayerValue} from './DataLayer'

// global variable
const spotify = new SpotifyWebApi();


function App() {
  // const [token, setToken] = useState(null);
  // dispatch with interect with data layer.
  const [{token}, dispatch] = useDataLayerValue();
  

  useEffect(() => {

    dispatch({
      type: 'SET_SPOTIFY',
      spotify: spotify
    })

    const hash = getAccessTokenFromUrl();

    // for security, remove access token from url after catching it.
    window.location.hash = ""

    const _token = hash.access_token;

    dispatch({
      type: 'SET_TOKEN',
      token: _token
    });

    if (_token){
      // setToken(_token);

      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        
        dispatch({
          type: 'SET_USER',
          user: user
        })

        console.log("User:", user)
      })
    
      spotify.getUserPlaylists().then(playlists => {
        dispatch({
          type: 'SET_PLAYLIST',
          playlists: playlists
        })
      })
      
      const discover_weekly_playlist_id = '37i9dQZEVXcP6cKVqbpCy3'
      spotify.getPlaylist(discover_weekly_playlist_id).then(response => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response
        })
      })
  

    }
  }, [])

  return (
    <div className='app' >
      {
        token ? <Player/> : <Login/>
      }

    </div>
  );
}

export default App;
