import React from 'react';

const GifList = ({ gifs }) => {
  return (
    <ul>
      {gifs.map(gif => (
        <ul key={gif.id}>
          <img src={gif.images.original.url} alt={gif.title} />
        </ul>
      ))}
    </ul>
  );
};

export default GifList;