import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

/* Import Components */
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

function App() {
  // Declare and initialize variables
  const [galleryList, setGalleryList] = useState([]);

  // auto-render table info on DOM:
  useEffect(() => {
    fetchGalleryList();
  }, []);

  /**
   * GET route for /gallery
   *
   * Function fetches all gallery items from their repository
   * and stores them locally in `galleryList`
   */
  const fetchGalleryList = () => {
    console.log('*** in fetchGalleryList() ***');

    axios
      .get('/gallery')
      .then((response) => {
        console.log('GET response:', response.data);
        setGalleryList(response.data);
      })
      .catch((error) => {
        alert('ERROR with request.  Please try again later.');
        console.log(`GET '/gallery' error:`, error);
      });
  };

  console.log();

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <GalleryList galleryList={galleryList} />
    </div>
  );
}

export default App;
