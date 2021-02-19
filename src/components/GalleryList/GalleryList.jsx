// import './GalleryList.css';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({ galleryList }) {
  console.log('*** in GalleryList() Component ***');
  console.log('galleryList:', galleryList);
  return (
    <div>
      {galleryList.map((galleryItem) => {
        return <GalleryItem key={galleryItem.id} galleryItem={galleryItem} />;
      })}
    </div>
  );
}

export default GalleryList;
