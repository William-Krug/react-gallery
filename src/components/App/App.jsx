import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

/* Import Components */
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import GalleryInputForm from '../GalleryInputForm/GalleryInputForm';

function App() {
  // Declare and initialize variables
  const [galleryList, setGalleryList] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newPath, setNewPath] = useState('');

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
        alert('Error with request.  Please try again later.');
        console.log(`GET '/gallery' error:`, error);
      });
  };

  /**
   * PUT route for /gallery/like/:id
   *
   * Function updates the passed id's like count by 1
   *
   * @param {loveItID} loveItID
   */
  const loveIt = (loveItID) => {
    console.log('*** in loveIt ***');
    console.log('loveItID:', loveItID);

    axios
      .put(`/gallery/like/${loveItID}`, { likes: '++' })
      .then((response) => {
        console.log('PUT response:', response);
        fetchGalleryList();
      })
      .catch((error) => {
        alert('Error with request.  Please try again later.');
        console.log(`PUT '/gallery/like/${loveItID}' error:`, error);
      });
  };

  const addNewItem = (event) => {
    event.preventDefault();
    console.log('*** in addNewItem() ***');

    axios
      .post('/gallery', {
        title: newTitle,
        description: newDescription,
        path: newPath,
      })
      .then((response) => {
        console.log('POST response:', response);
        fetchGalleryList();
        clearInputs();
      })
      .catch((error) => {
        alert('Error with request.  Please try again later.');
        console.log('POST /gallery error:', error);
      });
  };

  const clearInputs = () => {
    setNewTitle('');
    setNewDescription('');
    setNewPath('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <GalleryInputForm
        newTitle={newTitle}
        setNewTitle={setNewTitle}
        newDescription={newDescription}
        setNewDescription={setNewDescription}
        newPath={newPath}
        setNewPath={setNewPath}
      />
      <GalleryList galleryList={galleryList} loveIt={loveIt} />
    </div>
  );
}

export default App;
