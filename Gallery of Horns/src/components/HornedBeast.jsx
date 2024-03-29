// HornedBeast.jsx
import React, { useState } from 'react';

function HornedBeast(props) {
  const [favoriteCount, setFavoriteCount] = useState(0);

  const handleFavoriteClick = () => {
    setFavoriteCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h2>{props.title}</h2>
      <img 
        src={props.imageUrl} 
        alt={props.title} 
        title={props.title} 
        onClick={props.onSelect} 
        className="beast-image" // Add the beast-image class to the <img> element
      />
      <p>{props.description}</p>
      <button onClick={handleFavoriteClick}>Favorite</button>
      <p>
        <span role="img" aria-label="heart">❤️</span> {favoriteCount} Favorites
      </p>
    </div>
  );
}

export default HornedBeast;
