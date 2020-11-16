import React from 'react';
import './Login.css';
import {loginUrl} from './Spotify.js'

function Login() {
    return (
        <div className='login'>
            {/* spotify logo */}
            <img src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt=''></img>
            {/* Login w/ spotify button */} 
            <a href={loginUrl}>Log in with spotify.</a>
        </div>
    )
}

export default Login
