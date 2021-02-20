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

  let clickCounter = 1;

  const pictureSwap = (event) => {
    event.preventDefault();
    if (clickCounter % 2 === 0) {
      clickCounter++;
      return (
        <img
          src={galleryItem.path}
          alt={galleryItem.description}
          width="200"
          height="200"
        />
      );
    } else {
      clickCounter++;
      return <p>{galleryItem.description}</p>;
    }
  };

  return (
    <div className="gallery-item">
      <div
      // onClick={() => {
      //   console.log('image <div> clicked');
      //   pictureSwap();
      // }}
      >
        <img
          src={galleryItem.path}
          alt={galleryItem.description}
          width="200"
          height="200"
          onClick={() => {
            console.log('image clicked');
            pictureSwap(event);
          }}
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
