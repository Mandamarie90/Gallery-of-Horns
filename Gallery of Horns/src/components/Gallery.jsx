// Gallery.jsx
import React from 'react';
import HornedBeast from './HornedBeast';

function Gallery({ beasts, onSelectBeast }) {
  return (
    <div>
      {beasts.map((beast) => (
        <HornedBeast
          key={beast._id}
          title={beast.title}
          imageUrl={beast.image_url}
          description={beast.description}
          onSelect={() => onSelectBeast(beast)} // Pass onSelect function
        />
      ))}
    </div>
  );
}

export default Gallery;
