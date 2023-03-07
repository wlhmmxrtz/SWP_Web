import logo from "./logo.png";
import "./App.css";
import React, { useState } from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import 'react-spotify-auth/dist/index.css'

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  console.log("Inputvalue is " + inputValue);

  let randomURI= "";
  let albumName = "";

  let randomNumber = Math.floor(Math.random() * 10)

  let roundedNumber = Math.round(randomNumber);

  switch (roundedNumber) {
    case 0:
      albumName="Ye"
      randomURI="spotify:album:2Ek1q2haOnxVqhvVKqMvJe"
      break;
    case 1:
      albumName="The College Dropout"
      randomURI="spotify:album:4Uv86qWpGTxf7fU7lG5X6F"
      break;
    case 2:
      albumName="Late Registration"
      randomURI="spotify:album:5ll74bqtkcXlKE7wwkMq4g"
      break;
    case 3:
      albumName="Graduation"
      randomURI="spotify:album:4SZko61aMnmgvNhfhgTuD3"
      break;
    case 4:
      albumName="808s & Heartbreak"
      randomURI="spotify:album:3WFTGIO6E3Xh4paEOBY9OU"
      break;
    case 5:
      albumName="MBDTF"
      randomURI="spotify:album:20r762YmB5HeofjMCiPMLv"
      break;
    case 6:
      albumName="Watch the Throne"
      randomURI="spotify:album:0OcMap99vLEeGkBCfCwRwS"
      break;
    case 7:
      albumName="Yeezus"
      randomURI="spotify:album:7D2NdGvBHIavgLhmcwhluK"
      break;
    case 8:
      albumName="TLOP"
      randomURI="spotify:album:7gsWAHLeT0w7es6FofOXk1"
      break;
    case 9:
      albumName="Kids See Ghosts"
      randomURI="spotify:album:6pwuKxMUkNg673KETsXPUV"
      break;
    case 10:
      albumName="DONDA"
      randomURI="spotify:album:5CnpZV3q5BcESefcB3WJmz"
      break;
  }

  console.log("the number " + randomNumber + " ~ " + roundedNumber + " Album: " + albumName);

  return (
    <div className="App">
      <header className="App-header">
        <h2 class="headline">The Kanye Player</h2>
        <div>
        <input type="text" id="codeInput" value={inputValue} placeholder="Spotify Token here" onInput={handleInputChange}/>
        </div>
        <h1 class="h1">No Token? - Get yours <a data-component-name="Anchor" rel="noopener noreferrer" target="_blank" href="https://accounts.spotify.com/en/authorize?response_type=token&amp;client_id=adaaf209fb064dfab873a71817029e0d&amp;redirect_uri=https:%2F%2Fdeveloper.spotify.com%2Fdocumentation%2Fweb-playback-sdk%2Fquick-start%2F&amp;scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state&amp;show_dialog=true" class="here"><span>here</span></a></h1>
        <img src={logo} className="App-logo" alt="logo"/>
          <div className="SpotifyPlayer">
            <SpotifyPlayer
              className="App-spotify-player"
              hideAttribution="true"
              token={inputValue}
              uris={[randomURI]}
              styles={{
                activeColor: "#fff",
                bgColor: "#faebd7",
                color: "#000000",
                loaderColor: "#FDB9F8",
                sliderColor: "#363636",
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

