function GalleryList() {
  return (
    <div>
      <h2>Through the Years</h2>
      <div className="gallery-display">
        <div className="gallery-item">
          <img
            src="../../public/images/emma.jpg"
            alt="Photo of two knights fighting with hand-and-a-half broadswords."
            width="100"
            height="100"
          />
          <button onClick={() => console.log('Like Button Clicked')}>
            Love It!
          </button>
          <p>
            <strong>??</strong> people love this!
          </p>
        </div>

        <div className="gallery-item">
          <img
            src="../../public/images/skydiving.jpg"
            alt="Photo of tandem skydivers at 7,000 feet."
            width="100"
            height="100"
          />
          <button onClick={() => console.log('Like Button Clicked')}>
            Love It!
          </button>
          <p>
            <strong>??</strong> people love this!
          </p>
        </div>

        <div className="gallery-item">
          <img
            src="../../public/images/digital.jpg"
            alt="Photo of a color burst digitally rendered."
            width="100"
            height="100"
          />
          <button onClick={() => console.log('Like Button Clicked')}>
            Love It!
          </button>
          <p>
            <strong>??</strong> people love this!
          </p>
        </div>

        <div className="gallery-item">
          <img
            src="../../public/images/amber.jpg"
            alt="Photo of a stunning wife on our wedding day."
            width="100"
            height="100"
          />
          <button onClick={() => console.log('Like Button Clicked')}>
            Love It!
          </button>
          <p>
            <strong>??</strong> people love this!
          </p>
        </div>

        <div className="gallery-item">
          <img
            src="../../public/images/munchkins.jpg"
            alt="Photo of a new big sister loving her little brother."
            width="100"
            height="100"
          />
          <button onClick={() => console.log('Like Button Clicked')}>
            Love It!
          </button>
          <p>
            <strong>??</strong> people love this!
          </p>
        </div>

        <div className="gallery-item">
          <img
            src="../../public/images/emma.jpg"
            alt="Photo of two knights fighting with hand-and-a-half broadswords."
            width="100"
            height="100"
          />
          <button onClick={() => console.log('Like Button Clicked')}>
            Love It!
          </button>
          <p>
            <strong>??</strong> people love this!
          </p>
        </div>
      </div>
    </div>
  );
}

export default GalleryList;
