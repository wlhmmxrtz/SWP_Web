import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I miss the old Kanye.
        </p>
        <a
          className="App-link"
          href="https://open.spotify.com/artist/5K4W6rqBFWDnAN6FQUkS6x?si=MjPnkno2Sx-Z0j2aZB2WRA"
          target="_blank"
          rel="noopener noreferrer"
        >
          Listen to Kanye on Spotify
        </a>
      </header>
    </div>
  );
}

export default App;
