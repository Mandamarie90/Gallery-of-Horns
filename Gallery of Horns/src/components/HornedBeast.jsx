import React, { useState } from 'react';

function HornedBeast(props) {
  const [favoriteCount, setFavoriteCount] = useState(0);

  const handleFavoriteClick = () => {
    // Increment the favorite count by 1 each time the favorite button is clicked
    setFavoriteCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h2>{props.title}</h2>
      <img src={props.imageUrl} alt={props.title} title={props.title} />
      <p>{props.description}</p>
      <button onClick={handleFavoriteClick}>Favorite</button>
      <p>
        <span role="img" aria-label="heart">❤️</span> {favoriteCount} Favorites
      </p>
    </div>
  );
}

export default HornedBeast;
