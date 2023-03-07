import logo from "./logo.png";
import "./App.css";
import React, { useState, useEffect } from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import { SpotifyAuth, Scopes } from 'react-spotify-auth';
import { SpotifyApiContext } from 'react-spotify-api';
import Cookies from 'js-cookie'
import 'react-spotify-auth/dist/index.css'

function App() {
  const [spotifyAuthToken, setSpotifyAuthToken] = React.useState(Cookies.get("spotifyAuthToken"))

  useEffect(() => {
    setSpotifyAuthToken(Cookies.get('spotifyAuthToken'))
  }, [spotifyAuthToken])

  return (
    <div className="App">

{Cookies.get('spotifyAuthToken') ? (
        <SpotifyApiContext.Provider value={spotifyAuthToken}>
          {/* Your Spotify Code here */}
        </SpotifyApiContext.Provider>
      ) : (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div className="Login-container">
        <SpotifyAuth
        redirectUri='http://localhost:3000/'
        clientID='ea1a13b61c08485cbc4d390479c7f499'
        scopes={[Scopes.userReadPrivate, Scopes.userReadEmail]}
        />
        </div>

          <div className="SpotifyPlayer">
            <SpotifyPlayer
              className="App-spotify-player"
              token={spotifyAuthToken}
              uris={["spotify:artist:5K4W6rqBFWDnAN6FQUkS6x"]}
              styles={{
                activeColor: "#fff",
                bgColor: "#faebd7",
                color: "#000000",
                loaderColor: "#FDB9F8",
                sliderColor: "#FDB9F8",
                trackArtistColor: "#FDB9F8",
                trackNameColor: "#000000",
              }}
            />
          </div>
      </header>
      )}
    </div>
  );
}

export default App;

