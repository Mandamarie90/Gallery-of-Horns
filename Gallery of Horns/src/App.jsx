import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Gallery from './components/Gallery.jsx';
import hornedBeastsData from '../hornedBeastsData.json'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [selectedBeast, setSelectedBeast] = useState(null);

  const handleBeastSelect = (beast) => {
    setSelectedBeast(beast); 
  };

  return (
    <>
      <Gallery beasts={hornedBeastsData} onSelectBeast={handleBeastSelect} />
      {selectedBeast && (
        <SelectedBeast beast={selectedBeast} onClose={() => setSelectedBeast(null)} />
      )}
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

export default App;
