import { useState } from 'react';
import './GalleryItem.css';

/**
 * Function creates individual items to be used in the GalleryList component.
 *
 * Returns jsx to be displayed by the GalleryList.jsx component
 *
 * Incoming props looks like:
 * {
 *  id: 1,
 *  title: "Sir William",
 *  description: "Photo of two knights fighting with hand-and-a-half broadswords",
 *  path: "images/emma.jpg",
 *  likes: 77,
 * }
 * @param {galleryItem} param0
 * @param {loveIt} param1
 */
function GalleryItem({ galleryItem, loveIt }) {
  console.log('*** in GalleryItem() Component ***');

  const [clickCount, setClickCount] = useState(0);

  const pictureSwap = () => {
    if (clickCount % 2 === 0) {
      return (
        <img
          src={galleryItem.path}
          alt={galleryItem.description}
          width="200"
          height="200"
        />
      );
    } else {
      return <p className="photo-description">{galleryItem.description}</p>;
    }
  };

  return (
    <div className="gallery-item">
      <div
        className="picture-container rock-n-roll"
        onClick={() => setClickCount(clickCount + 1)}
      >
        {pictureSwap()}
      </div>
      <div>
        <button
          className="loveIt-button"
          onClick={() => loveIt(galleryItem.id)}
        >
          Love It!
        </button>
      </div>
      <div className="love=counter rock-n-roll">
        <p>
          <strong>{galleryItem.likes}</strong> people love this!
        </p>
      </div>
    </div>
  );
}

export default GalleryItem;
