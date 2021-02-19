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
 */
function GalleryItem({ galleryItem, loveIt }) {
  console.log('*** in GalleryItem() Component ***');
  return (
    <div className="gallery-item">
      <div>
        <img
          src={galleryItem.path}
          alt={galleryItem.description}
          width="200"
          height="200"
        />
      </div>
      <div>
        <button
          className="loveIt-button"
          onClick={() => loveIt(galleryItem.id)}
        >
          Love It!
        </button>
      </div>
      <div className="love=counter">
        <p>
          <strong>{galleryItem.likes}</strong> people love this!
        </p>
      </div>
    </div>
  );
}

export default GalleryItem;
