import HornedBeast from './HornedBeast';
import hornedBeastsData from '/hornedBeastsData.json'

function Gallery() {

  return (
    <div>
      {hornedBeastsData.map((beast, index) => (
        <HornedBeast
          key={index}
          title={beast.title}
          imageUrl={beast.image_url}
          description={beast.description}
        />
      ))}
    </div>
  );
}

export default Gallery
