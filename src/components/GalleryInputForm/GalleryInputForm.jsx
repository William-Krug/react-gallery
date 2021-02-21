import './GalleryInputForm.css';

/**
 * Function takes input values from the DOM to create
 * a new Gallery Item that is stored in the database
 *
 * @param {newTitle} param0
 * @param {setNewTitle} param1
 * @param {newDescription} param2
 * @param {setNewDescription} param3
 * @param {newPath} param4
 * @param {setNewPath} param5
 * @param {addNewItem} param6
 */
function GalleryInputForm({
  newTitle,
  setNewTitle,
  newDescription,
  setNewDescription,
  newPath,
  setNewPath,
  addNewItem,
}) {
  console.log('*** in GalleryInputForm() Component ***');
  return (
    <div className="input-form">
      <h2>Add a New Gallery Item</h2>
      <form onSubmit={addNewItem}>
        <div className="input-row">
          <label>
            <strong>Title</strong>
          </label>
          <input
            type="text"
            placeholder="1973 Pontiac GTO"
            value={newTitle}
            onChange={(event) => setNewTitle(event.target.value)}
            required
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
            required
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
            required
          />
          <button type="submit">Add Item</button>
        </div>
      </form>
    </div>
  );
}

export default GalleryInputForm;
