import logo from "./logo.png";
import "./App.css";
import React from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import 'react-spotify-auth/dist/index.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <script src="https://kit.fontawesome.com/20f56f52ff.js" crossorigin="anonymous"></script>
        <h1 class="h1">Get your code <a data-component-name="Anchor" rel="noopener noreferrer" target="_blank" href="https://accounts.spotify.com/en/authorize?response_type=token&amp;client_id=adaaf209fb064dfab873a71817029e0d&amp;redirect_uri=https:%2F%2Fdeveloper.spotify.com%2Fdocumentation%2Fweb-playback-sdk%2Fquick-start%2F&amp;scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state&amp;show_dialog=true" class="here"><span>here</span></a></h1>
        <div>
        <input type="text"/>
        <button><i class="fa-solid fa-check fa-2x"></i></button>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
          <div className="SpotifyPlayer">
            <SpotifyPlayer
              className="App-spotify-player"
              token="BQAU0xq5y5rrtNTtznaUw3nrhT-kVMMF2Mi3GUMtUItUfb9-uzP2M7MFlEjJATjGtRsXFDASAjSeGEXqKSX-VlDxUoAPsodbo3YL1ou2auGIK8IzoDx3Qu1sJh6OIFnoQsKv7KjRQOYowrdDHgARIGl_ZdkWl8_zCMxZltumJf63N-lpP4RqLGWG8qcPqhrVL3dIcK8ucmIQQOi4s75VShQqakDQRU3KgTI
              "
              uris={["spotify:album:20r762YmB5HeofjMCiPMLv"]}
              styles={{
                activeColor: "#fff",
                bgColor: "#faebd7",
                color: "#000000",
                loaderColor: "#FDB9F8",
                sliderColor: "#FDB9F8",
                sliderTrackColor: "#FDB9F8",
                trackArtistColor: "#FDB9F8",
                trackNameColor: "#000000",
              }}
            />
          </div>
      </header>
    </div>
  );
}

export default App;

