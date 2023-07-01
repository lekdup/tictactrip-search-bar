import { useState } from 'react';
import './App.scss';
import SearchBar from './SearchBar/SearchBar';

function App() {
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      window.location.href = 'https://www.tictactrip.eu';
    }, 3000);
  }

  if (loading) {
    
  }
  return (
    <div className="App">
      {loading ? (
        <div className="redirectTictactrip">
          <h2>How about we try the Europe's best online reservation</h2>
          <img src="https://pyxis.nymag.com/v1/imgs/d6a/dc7/4a5001b7beea096457f480c8808572428b-09-roll-safe.2x.h473.w710.jpg" alt="meme of a guy acting like thinking"/>
        </div>
      ) : (
        <SearchBar handleSubmit={handleSubmit}/>
      )}
    </div>
  );
}

export default App;
