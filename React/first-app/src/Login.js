import React from 'react'
import SpotifyLogoWhite from "./login_white.png";
import "./Login.css";
import { loginUrl } from "./spotify";

function Login() {
    return (
        <div class="div">
            <img src={SpotifyLogoWhite} alt="Spotify-Logo" id="img"/>
            <a href={loginUrl} id="a">LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login
