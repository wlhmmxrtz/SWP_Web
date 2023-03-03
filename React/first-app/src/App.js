import logo from "./logo.png";
import "./App.css";
import SpotifyPlayer from "react-spotify-web-playback";
import React from "react";
import "./App.css";
import Login from "./Login";
import Dashboard from "./Dashboard"
import {useAuth} from "./useAuth.js" 

const code = new URLSearchParams(window.location.search).get('code')


function App() {
  const token = useAuth(code)
  return (
    <div className="App">
      <header className="App-header">
      {code ? <Dashboard code={code} /> : <p></p>}
        <img src={logo} className="App-logo" alt="logo" />
        <div class="Login">
        <Login className="Login"/>
        </div>
        <div class="SpotifyPlayer">
        <SpotifyPlayer
          className="App-spotify-player"
          token={token}
          uris={["spotify:artist:5K4W6rqBFWDnAN6FQUkS6x"]}
          styles={{
            activeColor: '#fff',
            bgColor: '#faebd7',
            color: '#000000',
            loaderColor: '#FDB9F8',
            sliderColor: '#FDB9F8',
            trackArtistColor: '#FDB9F8',
            trackNameColor: '#000000',
          }}
        />
        </div>
      </header>
    </div>
  );
}

export default App;
