import './GalleryInputForm.css';

function GalleryInputForm({
  newTitle,
  setNewTitle,
  newDescription,
  setNewDescription,
  newPath,
  setNewPath,
}) {
  console.log('*** in GalleryInputForm() Component ***');
  return (
    <div className="input-form">
      <h2>Add a New Gallery Item</h2>
      <form
        onSubmit={() => {
          console.log('Form Submit');
        }}
      >
        <div className="input-row">
          <label>
            <strong>Title</strong>
          </label>
          <input
            type="text"
            placeholder="1973 Pontiac GTO"
            value={newTitle}
            onChange={(event) => setNewTitle(event.target.value)}
          />
        </div>
        <div className="input-row">
          <label>
            <strong>Description</strong>
          </label>
          <input
            type="text"
            placeholder="Dream Car"
            value={newDescription}
            onChange={(event) => setNewDescription(event.target.value)}
          />
        </div>
        <div className="input-row">
          <label>
            <strong>URL</strong>
          </label>
          <input
            type="url"
            placeholder="https://www..."
            value={newPath}
            onChange={(event) => setNewPath(event.target.value)}
          />
          <button type="submit">Add Item</button>
        </div>
      </form>
    </div>
  );
}

export default GalleryInputForm;
