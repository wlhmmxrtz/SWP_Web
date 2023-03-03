import logo from "./logo.png";
import "./App.css";
import SpotifyPlayer from "react-spotify-web-playback";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>I miss the old Kanye.</p>
        <SpotifyPlayer
          className="App-spotify-player"
          token="BQC5ytXA4G2Iz1gU3D7UweXwYJb9Sp388KYdzSbFIO9TuKf4x9edpxG7zIa8PWCTDPVs16mt_dy81gIHkXthbsnqt0eedBrMjfTY7sFfWLin9PuPbaeRGSpxUYJzcNr6_E7yd8pq1J0UFW8MB6kHHWf7cZyO3AtLNCDFMOldYr5Z9YpHQ5Vp_MnpZcO09uKOzQK06UIJJyKChAHPpuFS_G3U8L7KWiYVFo4"
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
      </header>
    </div>
  );
}

export default App;
