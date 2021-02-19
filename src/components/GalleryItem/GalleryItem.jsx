function GalleryItem() {
  return (
    <div className="gallery-item">
      <div>
        <img
          src="images/emma.jpg"
          alt="Photo of two knights fighting with hand-and-a-half broadswords."
          width="150"
          height="150"
        />
      </div>
      <div>
        <button
          className="loveIt-button"
          onClick={() => console.log('Like Button Clicked')}
        >
          Love It!
        </button>
      </div>
      <div className="love=counter">
        <p>
          <stromn>??</stromn> people love this!
        </p>
      </div>
    </div>
  );
}

export default GalleryItem;
