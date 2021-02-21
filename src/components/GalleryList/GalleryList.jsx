// import './GalleryList.css';
import GalleryItem from '../GalleryItem/GalleryItem';

/**
 * Function creates a container to place individual items in to be used by the App component
 *
 * Returns jsx to be displayed by the App.jsx component
 *
 * Incoming props looks like:
 * [{id: title: description: path: likes:}, {}, {}...]
 *
 * @param {galleryList} param0
 * @param {loveIt} param1
 * @param {removeGalleryItem} param2
 */
function GalleryList({ galleryList, loveIt, removeGalleryItem }) {
  console.log('*** in GalleryList() Component ***');
  return (
    <div>
      {galleryList.map((galleryItem) => {
        return (
          <GalleryItem
            key={galleryItem.id}
            galleryItem={galleryItem}
            loveIt={loveIt}
            removeGalleryItem={removeGalleryItem}
          />
        );
      })}
    </div>
  );
}

export default GalleryList;
