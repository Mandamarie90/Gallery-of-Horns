import { useState } from 'react';
import ReactDOM from 'react-dom';
import Gallery from './components/Gallery.jsx';
import hornedBeastsData from '../hornedBeastsData.json'; 
import SelectedBeast from './components/SelectedBeast.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [selectedBeast, setSelectedBeast] = useState(null);

  const handleBeastSelect = (beast) => {
    // console.log(beast);
    setSelectedBeast(beast); 
  };

  return (
    <>
      <Gallery beasts={hornedBeastsData} onSelectBeast={handleBeastSelect} />
      {selectedBeast && (
        <SelectedBeast selectedBeast={selectedBeast} onClose={() => setSelectedBeast(null)} />
      )}
    </>
  );
}



export default App;
