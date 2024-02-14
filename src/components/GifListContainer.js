import { useState, useEffect } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

const GifListContainer = () => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    fetch("https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=t3Ta9O9uFmxAObQ7rcBWGrasjNVEbzvj")
    .then((response) => response.json())
    .then((data) => {
        setGifs(data.data.slice(0, 3));
    })

  }, []);

  const handleSubmit = (query) => {
    console.log("Search query:", query);
  };

  return (
    <div>
      <h2>Top 3 Dolphin GIFs</h2>
      <GifSearch onSubmit={handleSubmit} />
      <GifList gifs={gifs} />
    </div>
  );
};

export default GifListContainer;